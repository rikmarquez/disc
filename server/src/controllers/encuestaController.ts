import { Request, Response } from 'express';
import prisma from '../config/database';
import { StatusEncuesta } from '@prisma/client';

// Validar código de encuesta
export const validarCodigo = async (req: Request, res: Response): Promise<void> => {
  try {
    const { codigo } = req.body;

    if (!codigo) {
      res.status(400).json({ error: 'Código es requerido' });
      return;
    }

    const encuestado = await prisma.encuestado.findUnique({
      where: { codigo },
      include: {
        empresa: {
          select: {
            nombre: true,
          },
        },
      },
    });

    if (!encuestado) {
      res.status(404).json({ error: 'Código no válido' });
      return;
    }

    if (encuestado.status === StatusEncuesta.COMPLETADO) {
      res.status(400).json({
        error: 'Esta encuesta ya fue completada',
        completada: true,
      });
      return;
    }

    // Si está pendiente, marcarla como en proceso
    if (encuestado.status === StatusEncuesta.PENDIENTE) {
      await prisma.encuestado.update({
        where: { id: encuestado.id },
        data: {
          status: StatusEncuesta.EN_PROCESO,
          fechaInicio: new Date(),
        },
      });
    }

    res.status(200).json({
      message: 'Código válido',
      encuestado: {
        id: encuestado.id,
        nombre: encuestado.nombre,
        empresa: encuestado.empresa.nombre,
        status: encuestado.status,
      },
    });
  } catch (error) {
    console.error('Error en validarCodigo:', error);
    res.status(500).json({ error: 'Error al validar código' });
  }
};

// Obtener preguntas de la encuesta
export const obtenerPreguntas = async (req: Request, res: Response): Promise<void> => {
  try {
    const preguntas = await prisma.pregunta.findMany({
      orderBy: { numero: 'asc' },
      select: {
        id: true,
        numero: true,
        bloque: true,
        texto: true,
        opcionA: true,
        opcionB: true,
        opcionC: true,
        opcionD: true,
        // NO incluimos las claves A/B/C/D por seguridad
      },
    });

    res.status(200).json({ preguntas });
  } catch (error) {
    console.error('Error en obtenerPreguntas:', error);
    res.status(500).json({ error: 'Error al obtener preguntas' });
  }
};

// Guardar respuesta individual
export const guardarRespuesta = async (req: Request, res: Response): Promise<void> => {
  try {
    const { codigo, numeroPregunta, opcionSeleccionada } = req.body;

    if (!codigo || !numeroPregunta || !opcionSeleccionada) {
      res.status(400).json({ error: 'Todos los campos son requeridos' });
      return;
    }

    // Validar que la opción sea A, B, C o D
    if (!['A', 'B', 'C', 'D'].includes(opcionSeleccionada)) {
      res.status(400).json({ error: 'Opción no válida' });
      return;
    }

    // Verificar que el encuestado existe y no ha completado
    const encuestado = await prisma.encuestado.findUnique({
      where: { codigo },
    });

    if (!encuestado) {
      res.status(404).json({ error: 'Encuestado no encontrado' });
      return;
    }

    if (encuestado.status === StatusEncuesta.COMPLETADO) {
      res.status(400).json({ error: 'Esta encuesta ya fue completada' });
      return;
    }

    // Obtener la pregunta por número
    const pregunta = await prisma.pregunta.findFirst({
      where: { numero: numeroPregunta },
    });

    if (!pregunta) {
      res.status(404).json({ error: 'Pregunta no encontrada' });
      return;
    }

    // Determinar el perfil asignado según la opción seleccionada
    let perfilAsignado: string;
    switch (opcionSeleccionada) {
      case 'A':
        perfilAsignado = pregunta.claveA;
        break;
      case 'B':
        perfilAsignado = pregunta.claveB;
        break;
      case 'C':
        perfilAsignado = pregunta.claveC;
        break;
      case 'D':
        perfilAsignado = pregunta.claveD;
        break;
      default:
        res.status(400).json({ error: 'Opción no válida' });
        return;
    }

    // Crear o actualizar la respuesta
    const respuesta = await prisma.respuesta.upsert({
      where: {
        encuestadoId_preguntaId: {
          encuestadoId: encuestado.id,
          preguntaId: pregunta.id,
        },
      },
      update: {
        opcionSeleccionada,
        perfilAsignado,
      },
      create: {
        encuestadoId: encuestado.id,
        preguntaId: pregunta.id,
        opcionSeleccionada,
        perfilAsignado,
      },
    });

    res.status(200).json({
      message: 'Respuesta guardada exitosamente',
      respuesta: {
        id: respuesta.id,
        preguntaId: respuesta.preguntaId,
        opcionSeleccionada: respuesta.opcionSeleccionada,
      },
    });
  } catch (error) {
    console.error('Error en guardarRespuesta:', error);
    res.status(500).json({ error: 'Error al guardar respuesta' });
  }
};

// Calcular resultados DISC
const calcularResultados = async (encuestadoId: string) => {
  const respuestas = await prisma.respuesta.findMany({
    where: { encuestadoId },
  });

  // Contar puntos por perfil
  let puntosD = 0;
  let puntosI = 0;
  let puntosS = 0;
  let puntosC = 0;

  respuestas.forEach((respuesta) => {
    switch (respuesta.perfilAsignado) {
      case 'D':
        puntosD++;
        break;
      case 'I':
        puntosI++;
        break;
      case 'S':
        puntosS++;
        break;
      case 'C':
        puntosC++;
        break;
    }
  });

  // Determinar perfil primario (máximo)
  const perfiles = [
    { perfil: 'D', puntos: puntosD },
    { perfil: 'I', puntos: puntosI },
    { perfil: 'S', puntos: puntosS },
    { perfil: 'C', puntos: puntosC },
  ];

  perfiles.sort((a, b) => b.puntos - a.puntos);

  const perfilPrimario = perfiles[0].perfil;
  const perfilSecundario = perfiles[1].perfil;

  // Determinar arquetipo basado en combinación primaria-secundaria
  const arquetipo = determinarArquetipo(perfilPrimario, perfilSecundario);

  return {
    puntosD,
    puntosI,
    puntosS,
    puntosC,
    perfilPrimario,
    perfilSecundario,
    arquetipo,
  };
};

// Determinar arquetipo según combinación de perfiles
const determinarArquetipo = (primario: string, secundario: string): string => {
  const combinacion = `${primario}${secundario}`;

  const arquetipos: { [key: string]: string } = {
    'DI': 'El Emprendedor (Conquistador)',
    'DC': 'El Estratega (Arquitecto)',
    'DS': 'El Director (Mentor)',
    'ID': 'El Motivador (Entusiasta)',
    'IS': 'El Comunicador (Inspirador)',
    'IC': 'El Persuasor (Vendedor)',
    'SD': 'El Facilitador (Conciliador)',
    'SI': 'El Colaborador (Embajador)',
    'SC': 'El Servidor (Protector)',
    'CD': 'El Analista (Perfeccionista)',
    'CI': 'El Investigador (Evaluador)',
    'CS': 'El Técnico (Especialista)',
  };

  return arquetipos[combinacion] || `Perfil ${primario}-${secundario}`;
};

// Finalizar encuesta y calcular resultados
export const finalizarEncuesta = async (req: Request, res: Response): Promise<void> => {
  try {
    const { codigo } = req.body;

    if (!codigo) {
      res.status(400).json({ error: 'código es requerido' });
      return;
    }

    // Verificar que el encuestado existe
    const encuestado = await prisma.encuestado.findUnique({
      where: { codigo },
    });

    if (!encuestado) {
      res.status(404).json({ error: 'Encuestado no encontrado' });
      return;
    }

    if (encuestado.status === StatusEncuesta.COMPLETADO) {
      res.status(400).json({ error: 'Esta encuesta ya fue completada' });
      return;
    }

    // Verificar que todas las preguntas han sido respondidas (30 preguntas)
    const totalRespuestas = await prisma.respuesta.count({
      where: { encuestadoId: encuestado.id },
    });

    if (totalRespuestas < 30) {
      res.status(400).json({
        error: 'Debe responder todas las preguntas antes de finalizar',
        respondidas: totalRespuestas,
        faltantes: 30 - totalRespuestas,
      });
      return;
    }

    // Calcular resultados
    const resultados = await calcularResultados(encuestado.id);

    // Guardar resultados en la base de datos
    const resultado = await prisma.resultado.create({
      data: {
        encuestadoId: encuestado.id,
        ...resultados,
      },
    });

    // Actualizar status del encuestado
    await prisma.encuestado.update({
      where: { id: encuestado.id },
      data: {
        status: StatusEncuesta.COMPLETADO,
        fechaCompletado: new Date(),
      },
    });

    res.status(200).json({
      message: 'Encuesta completada exitosamente',
      resultado: {
        puntosD: resultado.puntosD,
        puntosI: resultado.puntosI,
        puntosS: resultado.puntosS,
        puntosC: resultado.puntosC,
        perfilPrimario: resultado.perfilPrimario,
        perfilSecundario: resultado.perfilSecundario,
        arquetipo: resultado.arquetipo,
      },
    });
  } catch (error) {
    console.error('Error en finalizarEncuesta:', error);
    res.status(500).json({ error: 'Error al finalizar encuesta' });
  }
};
