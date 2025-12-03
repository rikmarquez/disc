import { Request, Response } from 'express';
import prisma from '../config/database';
import { generateUniqueCodigo } from '../services/codigoGenerator';

// Listar encuestados (con filtro opcional por empresa)
export const getEncuestados = async (req: Request, res: Response): Promise<void> => {
  try {
    const userId = req.userId!;
    const { empresaId } = req.query;

    // Construir el where clause
    const whereClause: any = {
      empresa: {
        usuarioId: userId,
      },
    };

    if (empresaId) {
      whereClause.empresaId = empresaId as string;
    }

    const encuestados = await prisma.encuestado.findMany({
      where: whereClause,
      include: {
        empresa: {
          select: {
            id: true,
            nombre: true,
          },
        },
        resultado: true,
      },
      orderBy: { createdAt: 'desc' },
    });

    res.status(200).json({ encuestados });
  } catch (error) {
    console.error('Error en getEncuestados:', error);
    res.status(500).json({ error: 'Error al obtener encuestados' });
  }
};

// Obtener encuestado por ID
export const getEncuestadoById = async (req: Request, res: Response): Promise<void> => {
  try {
    const { id } = req.params;
    const userId = req.userId!;

    const encuestado = await prisma.encuestado.findFirst({
      where: {
        id,
        empresa: {
          usuarioId: userId,
        },
      },
      include: {
        empresa: true,
        respuestas: {
          include: {
            pregunta: {
              select: {
                numero: true,
              },
            },
          },
        },
        resultado: true,
      },
    });

    if (!encuestado) {
      res.status(404).json({ error: 'Encuestado no encontrado' });
      return;
    }

    res.status(200).json({ encuestado });
  } catch (error) {
    console.error('Error en getEncuestadoById:', error);
    res.status(500).json({ error: 'Error al obtener encuestado' });
  }
};

// Crear encuestado
export const createEncuestado = async (req: Request, res: Response): Promise<void> => {
  try {
    const userId = req.userId!;
    const { nombre, email, puesto, departamento, empresaId } = req.body;

    // Validar campos requeridos
    if (!nombre || !empresaId) {
      res.status(400).json({ error: 'Nombre y empresaId son requeridos' });
      return;
    }

    // Verificar que la empresa pertenece al usuario
    const empresa = await prisma.empresa.findFirst({
      where: {
        id: empresaId,
        usuarioId: userId,
      },
    });

    if (!empresa) {
      res.status(404).json({ error: 'Empresa no encontrada' });
      return;
    }

    // Generar código único
    const codigo = await generateUniqueCodigo();

    // Crear encuestado
    const encuestado = await prisma.encuestado.create({
      data: {
        nombre,
        email,
        puesto,
        departamento,
        empresaId,
        codigo,
      },
      include: {
        empresa: {
          select: {
            id: true,
            nombre: true,
          },
        },
      },
    });

    res.status(201).json({
      message: 'Encuestado creado exitosamente',
      encuestado,
    });
  } catch (error) {
    console.error('Error en createEncuestado:', error);
    res.status(500).json({ error: 'Error al crear encuestado' });
  }
};

// Actualizar encuestado
export const updateEncuestado = async (req: Request, res: Response): Promise<void> => {
  try {
    const { id } = req.params;
    const userId = req.userId!;
    const { nombre, email, puesto, departamento } = req.body;

    // Verificar que el encuestado pertenece al usuario
    const encuestadoExistente = await prisma.encuestado.findFirst({
      where: {
        id,
        empresa: {
          usuarioId: userId,
        },
      },
    });

    if (!encuestadoExistente) {
      res.status(404).json({ error: 'Encuestado no encontrado' });
      return;
    }

    const encuestado = await prisma.encuestado.update({
      where: { id },
      data: {
        nombre,
        email,
        puesto,
        departamento,
      },
      include: {
        empresa: {
          select: {
            id: true,
            nombre: true,
          },
        },
      },
    });

    res.status(200).json({
      message: 'Encuestado actualizado exitosamente',
      encuestado,
    });
  } catch (error) {
    console.error('Error en updateEncuestado:', error);
    res.status(500).json({ error: 'Error al actualizar encuestado' });
  }
};

// Eliminar encuestado
export const deleteEncuestado = async (req: Request, res: Response): Promise<void> => {
  try {
    const { id } = req.params;
    const userId = req.userId!;

    // Verificar que el encuestado pertenece al usuario
    const encuestado = await prisma.encuestado.findFirst({
      where: {
        id,
        empresa: {
          usuarioId: userId,
        },
      },
    });

    if (!encuestado) {
      res.status(404).json({ error: 'Encuestado no encontrado' });
      return;
    }

    await prisma.encuestado.delete({
      where: { id },
    });

    res.status(200).json({ message: 'Encuestado eliminado exitosamente' });
  } catch (error) {
    console.error('Error en deleteEncuestado:', error);
    res.status(500).json({ error: 'Error al eliminar encuestado' });
  }
};
