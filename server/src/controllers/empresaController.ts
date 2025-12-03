import { Request, Response } from 'express';
import prisma from '../config/database';

// Listar empresas del usuario autenticado
export const getEmpresas = async (req: Request, res: Response): Promise<void> => {
  try {
    const userId = req.userId!;

    const empresas = await prisma.empresa.findMany({
      where: { usuarioId: userId },
      include: {
        _count: {
          select: { encuestados: true },
        },
      },
      orderBy: { createdAt: 'desc' },
    });

    res.status(200).json({ empresas });
  } catch (error) {
    console.error('Error en getEmpresas:', error);
    res.status(500).json({ error: 'Error al obtener empresas' });
  }
};

// Obtener una empresa por ID
export const getEmpresaById = async (req: Request, res: Response): Promise<void> => {
  try {
    const { id } = req.params;
    const userId = req.userId!;

    const empresa = await prisma.empresa.findFirst({
      where: {
        id,
        usuarioId: userId,
      },
      include: {
        _count: {
          select: { encuestados: true },
        },
      },
    });

    if (!empresa) {
      res.status(404).json({ error: 'Empresa no encontrada' });
      return;
    }

    res.status(200).json({ empresa });
  } catch (error) {
    console.error('Error en getEmpresaById:', error);
    res.status(500).json({ error: 'Error al obtener empresa' });
  }
};

// Crear empresa
export const createEmpresa = async (req: Request, res: Response): Promise<void> => {
  try {
    const userId = req.userId!;
    const { nombre, razonSocial, contacto, email, telefono } = req.body;

    // Validar campos requeridos
    if (!nombre) {
      res.status(400).json({ error: 'El nombre es requerido' });
      return;
    }

    const empresa = await prisma.empresa.create({
      data: {
        nombre,
        razonSocial,
        contacto,
        email,
        telefono,
        usuarioId: userId,
      },
    });

    res.status(201).json({
      message: 'Empresa creada exitosamente',
      empresa,
    });
  } catch (error) {
    console.error('Error en createEmpresa:', error);
    res.status(500).json({ error: 'Error al crear empresa' });
  }
};

// Actualizar empresa
export const updateEmpresa = async (req: Request, res: Response): Promise<void> => {
  try {
    const { id } = req.params;
    const userId = req.userId!;
    const { nombre, razonSocial, contacto, email, telefono } = req.body;

    // Verificar que la empresa pertenece al usuario
    const empresaExistente = await prisma.empresa.findFirst({
      where: {
        id,
        usuarioId: userId,
      },
    });

    if (!empresaExistente) {
      res.status(404).json({ error: 'Empresa no encontrada' });
      return;
    }

    const empresa = await prisma.empresa.update({
      where: { id },
      data: {
        nombre,
        razonSocial,
        contacto,
        email,
        telefono,
      },
    });

    res.status(200).json({
      message: 'Empresa actualizada exitosamente',
      empresa,
    });
  } catch (error) {
    console.error('Error en updateEmpresa:', error);
    res.status(500).json({ error: 'Error al actualizar empresa' });
  }
};

// Eliminar empresa
export const deleteEmpresa = async (req: Request, res: Response): Promise<void> => {
  try {
    const { id } = req.params;
    const userId = req.userId!;

    // Verificar que la empresa pertenece al usuario
    const empresa = await prisma.empresa.findFirst({
      where: {
        id,
        usuarioId: userId,
      },
    });

    if (!empresa) {
      res.status(404).json({ error: 'Empresa no encontrada' });
      return;
    }

    await prisma.empresa.delete({
      where: { id },
    });

    res.status(200).json({ message: 'Empresa eliminada exitosamente' });
  } catch (error) {
    console.error('Error en deleteEmpresa:', error);
    res.status(500).json({ error: 'Error al eliminar empresa' });
  }
};
