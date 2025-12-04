"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.finalizarEncuesta = exports.guardarRespuestaE9 = exports.obtenerPreguntasE9 = exports.guardarRespuesta = exports.obtenerPreguntas = exports.validarCodigo = void 0;
const database_1 = __importDefault(require("../config/database"));
const client_1 = require("@prisma/client");
// Validar código de encuesta
const validarCodigo = async (req, res) => {
    try {
        const { codigo } = req.body;
        if (!codigo) {
            res.status(400).json({ error: 'Código es requerido' });
            return;
        }
        const encuestado = await database_1.default.encuestado.findUnique({
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
        if (encuestado.status === client_1.StatusEncuesta.COMPLETADO) {
            res.status(400).json({
                error: 'Esta encuesta ya fue completada',
                completada: true,
            });
            return;
        }
        // Si está pendiente, marcarla como en proceso
        if (encuestado.status === client_1.StatusEncuesta.PENDIENTE) {
            await database_1.default.encuestado.update({
                where: { id: encuestado.id },
                data: {
                    status: client_1.StatusEncuesta.EN_PROCESO,
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
    }
    catch (error) {
        console.error('Error en validarCodigo:', error);
        res.status(500).json({ error: 'Error al validar código' });
    }
};
exports.validarCodigo = validarCodigo;
// Obtener preguntas de la encuesta
const obtenerPreguntas = async (req, res) => {
    try {
        const preguntas = await database_1.default.pregunta.findMany({
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
    }
    catch (error) {
        console.error('Error en obtenerPreguntas:', error);
        res.status(500).json({ error: 'Error al obtener preguntas' });
    }
};
exports.obtenerPreguntas = obtenerPreguntas;
// Guardar respuesta individual
const guardarRespuesta = async (req, res) => {
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
        const encuestado = await database_1.default.encuestado.findUnique({
            where: { codigo },
        });
        if (!encuestado) {
            res.status(404).json({ error: 'Encuestado no encontrado' });
            return;
        }
        if (encuestado.status === client_1.StatusEncuesta.COMPLETADO) {
            res.status(400).json({ error: 'Esta encuesta ya fue completada' });
            return;
        }
        // Obtener la pregunta por número
        const pregunta = await database_1.default.pregunta.findFirst({
            where: { numero: numeroPregunta },
        });
        if (!pregunta) {
            res.status(404).json({ error: 'Pregunta no encontrada' });
            return;
        }
        // Determinar el perfil asignado según la opción seleccionada
        let perfilAsignado;
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
        const respuesta = await database_1.default.respuesta.upsert({
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
    }
    catch (error) {
        console.error('Error en guardarRespuesta:', error);
        res.status(500).json({ error: 'Error al guardar respuesta' });
    }
};
exports.guardarRespuesta = guardarRespuesta;
// Calcular resultados DISC
const calcularResultados = async (encuestadoId) => {
    const respuestas = await database_1.default.respuesta.findMany({
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
const determinarArquetipo = (primario, secundario) => {
    const combinacion = `${primario}${secundario}`;
    const arquetipos = {
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
// ========== FUNCIONES E9 (Eneagrama) ==========
// Obtener preguntas E9
const obtenerPreguntasE9 = async (req, res) => {
    try {
        const preguntasE9 = await database_1.default.preguntaE9.findMany({
            orderBy: { grupo: 'asc' },
            select: {
                grupo: true,
                opcion: true,
                texto: true,
            },
        });
        // Agrupar por grupo 1 y 2
        const grupo1 = preguntasE9.filter(p => p.grupo === 1).map(p => ({
            letra: p.opcion,
            texto: p.texto,
        }));
        const grupo2 = preguntasE9.filter(p => p.grupo === 2).map(p => ({
            letra: p.opcion,
            texto: p.texto,
        }));
        res.status(200).json({
            preguntas: [
                { grupo: 1, opciones: grupo1 },
                { grupo: 2, opciones: grupo2 },
            ],
        });
    }
    catch (error) {
        console.error('Error en obtenerPreguntasE9:', error);
        res.status(500).json({ error: 'Error al obtener preguntas E9' });
    }
};
exports.obtenerPreguntasE9 = obtenerPreguntasE9;
// Guardar respuesta E9
const guardarRespuestaE9 = async (req, res) => {
    try {
        const { codigo, grupo, opcion } = req.body;
        if (!codigo || !grupo || !opcion) {
            res.status(400).json({ error: 'Todos los campos son requeridos' });
            return;
        }
        // Validar grupo (1 o 2)
        if (![1, 2].includes(grupo)) {
            res.status(400).json({ error: 'Grupo no válido (debe ser 1 o 2)' });
            return;
        }
        // Validar opción según grupo
        const opcionesGrupo1 = ['A', 'B', 'C'];
        const opcionesGrupo2 = ['X', 'Y', 'Z'];
        if (grupo === 1 && !opcionesGrupo1.includes(opcion)) {
            res.status(400).json({ error: 'Opción no válida para grupo 1 (debe ser A, B o C)' });
            return;
        }
        if (grupo === 2 && !opcionesGrupo2.includes(opcion)) {
            res.status(400).json({ error: 'Opción no válida para grupo 2 (debe ser X, Y o Z)' });
            return;
        }
        // Verificar que el encuestado existe
        const encuestado = await database_1.default.encuestado.findUnique({
            where: { codigo },
        });
        if (!encuestado) {
            res.status(404).json({ error: 'Encuestado no encontrado' });
            return;
        }
        if (encuestado.status === client_1.StatusEncuesta.COMPLETADO) {
            res.status(400).json({ error: 'Esta encuesta ya fue completada' });
            return;
        }
        // Guardar o actualizar respuesta E9
        const respuestaE9 = await database_1.default.respuestaE9.upsert({
            where: {
                encuestadoId_grupo: {
                    encuestadoId: encuestado.id,
                    grupo,
                },
            },
            update: {
                opcion,
            },
            create: {
                encuestadoId: encuestado.id,
                grupo,
                opcion,
            },
        });
        // Contar progreso E9
        const totalRespuestasE9 = await database_1.default.respuestaE9.count({
            where: { encuestadoId: encuestado.id },
        });
        res.status(200).json({
            message: 'Respuesta E9 guardada exitosamente',
            progreso: {
                completadasE9: totalRespuestasE9,
                totalE9: 2,
            },
        });
    }
    catch (error) {
        console.error('Error en guardarRespuestaE9:', error);
        res.status(500).json({ error: 'Error al guardar respuesta E9' });
    }
};
exports.guardarRespuestaE9 = guardarRespuestaE9;
// Calcular eneatipo según combinación
const calcularEneatipo = (opcionGrupo1, opcionGrupo2) => {
    const MATRIZ_E9 = {
        'A-X': { numero: 7, nombre: 'El Entusiasta' },
        'A-Y': { numero: 8, nombre: 'El Desafiador' },
        'A-Z': { numero: 3, nombre: 'El Triunfador' },
        'B-X': { numero: 9, nombre: 'El Pacificador' },
        'B-Y': { numero: 5, nombre: 'El Investigador' },
        'B-Z': { numero: 4, nombre: 'El Individualista' },
        'C-X': { numero: 2, nombre: 'El Ayudador' },
        'C-Y': { numero: 6, nombre: 'El Leal' },
        'C-Z': { numero: 1, nombre: 'El Reformador' },
    };
    const combinacion = `${opcionGrupo1}-${opcionGrupo2}`;
    return MATRIZ_E9[combinacion] || null;
};
// Finalizar encuesta y calcular resultados
const finalizarEncuesta = async (req, res) => {
    try {
        const { codigo } = req.body;
        if (!codigo) {
            res.status(400).json({ error: 'código es requerido' });
            return;
        }
        // Verificar que el encuestado existe
        const encuestado = await database_1.default.encuestado.findUnique({
            where: { codigo },
        });
        if (!encuestado) {
            res.status(404).json({ error: 'Encuestado no encontrado' });
            return;
        }
        if (encuestado.status === client_1.StatusEncuesta.COMPLETADO) {
            res.status(400).json({ error: 'Esta encuesta ya fue completada' });
            return;
        }
        // Verificar que todas las preguntas DISC han sido respondidas (30 preguntas)
        const totalRespuestas = await database_1.default.respuesta.count({
            where: { encuestadoId: encuestado.id },
        });
        if (totalRespuestas < 30) {
            res.status(400).json({
                error: 'Debe responder todas las preguntas DISC antes de finalizar',
                respondidas: totalRespuestas,
                faltantes: 30 - totalRespuestas,
            });
            return;
        }
        // Verificar que todas las preguntas E9 han sido respondidas (2 preguntas)
        const totalRespuestasE9 = await database_1.default.respuestaE9.count({
            where: { encuestadoId: encuestado.id },
        });
        if (totalRespuestasE9 < 2) {
            res.status(400).json({
                error: 'Debe responder todas las preguntas E9 antes de finalizar',
                respondidasE9: totalRespuestasE9,
                faltantesE9: 2 - totalRespuestasE9,
            });
            return;
        }
        // Calcular resultados DISC
        const resultados = await calcularResultados(encuestado.id);
        // Obtener respuestas E9 para calcular eneatipo
        const respuestasE9 = await database_1.default.respuestaE9.findMany({
            where: { encuestadoId: encuestado.id },
            orderBy: { grupo: 'asc' },
        });
        const opcionGrupo1 = respuestasE9.find(r => r.grupo === 1)?.opcion || '';
        const opcionGrupo2 = respuestasE9.find(r => r.grupo === 2)?.opcion || '';
        // Calcular eneatipo
        const resultadoE9 = calcularEneatipo(opcionGrupo1, opcionGrupo2);
        if (!resultadoE9) {
            res.status(500).json({ error: 'Error al calcular eneatipo' });
            return;
        }
        // Guardar resultados en la base de datos (DISC + E9)
        const resultado = await database_1.default.resultado.create({
            data: {
                encuestadoId: encuestado.id,
                ...resultados,
                eneatipo: resultadoE9.numero,
                eneatipoNombre: resultadoE9.nombre,
                combinacionE9: `${opcionGrupo1}-${opcionGrupo2}`,
            },
        });
        // Actualizar status del encuestado
        await database_1.default.encuestado.update({
            where: { id: encuestado.id },
            data: {
                status: client_1.StatusEncuesta.COMPLETADO,
                fechaCompletado: new Date(),
            },
        });
        res.status(200).json({
            message: 'Encuesta completada exitosamente',
            resultado: {
                // DISC
                puntosD: resultado.puntosD,
                puntosI: resultado.puntosI,
                puntosS: resultado.puntosS,
                puntosC: resultado.puntosC,
                perfilPrimario: resultado.perfilPrimario,
                perfilSecundario: resultado.perfilSecundario,
                arquetipo: resultado.arquetipo,
                // E9
                eneatipo: resultado.eneatipo,
                eneatipoNombre: resultado.eneatipoNombre,
                combinacionE9: resultado.combinacionE9,
            },
        });
    }
    catch (error) {
        console.error('Error en finalizarEncuesta:', error);
        res.status(500).json({ error: 'Error al finalizar encuesta' });
    }
};
exports.finalizarEncuesta = finalizarEncuesta;
