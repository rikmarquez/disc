import { Request, Response } from 'express';
import prisma from '../config/database';
import { hashPassword, comparePassword } from '../utils/password';
import { generateToken } from '../utils/jwt';

// Register
export const register = async (req: Request, res: Response): Promise<void> => {
  try {
    const { email, password, nombre } = req.body;

    // Validar campos requeridos
    if (!email || !password || !nombre) {
      res.status(400).json({ error: 'Email, password y nombre son requeridos' });
      return;
    }

    // Verificar si el usuario ya existe
    const existingUser = await prisma.usuario.findUnique({
      where: { email },
    });

    if (existingUser) {
      res.status(400).json({ error: 'El email ya está registrado' });
      return;
    }

    // Hashear password
    const hashedPassword = await hashPassword(password);

    // Crear usuario
    const user = await prisma.usuario.create({
      data: {
        email,
        password: hashedPassword,
        nombre,
      },
    });

    // Generar token
    const token = generateToken({
      userId: user.id,
      email: user.email,
    });

    res.status(201).json({
      message: 'Usuario registrado exitosamente',
      token,
      usuario: {
        id: user.id,
        email: user.email,
        nombre: user.nombre,
      },
    });
  } catch (error) {
    console.error('Error en register:', error);
    res.status(500).json({ error: 'Error al registrar usuario' });
  }
};

// Login
export const login = async (req: Request, res: Response): Promise<void> => {
  try {
    const { email, password } = req.body;

    // Validar campos requeridos
    if (!email || !password) {
      res.status(400).json({ error: 'Email y password son requeridos' });
      return;
    }

    // Buscar usuario
    const user = await prisma.usuario.findUnique({
      where: { email },
    });

    if (!user) {
      res.status(401).json({ error: 'Credenciales inválidas' });
      return;
    }

    // Verificar password
    const isValidPassword = await comparePassword(password, user.password);

    if (!isValidPassword) {
      res.status(401).json({ error: 'Credenciales inválidas' });
      return;
    }

    // Generar token
    const token = generateToken({
      userId: user.id,
      email: user.email,
    });

    res.status(200).json({
      message: 'Login exitoso',
      token,
      usuario: {
        id: user.id,
        email: user.email,
        nombre: user.nombre,
      },
    });
  } catch (error) {
    console.error('Error en login:', error);
    res.status(500).json({ error: 'Error al iniciar sesión' });
  }
};

// Get current user
export const me = async (req: Request, res: Response): Promise<void> => {
  try {
    // @ts-ignore - userId será agregado por el middleware de autenticación
    const userId = req.userId;

    const user = await prisma.usuario.findUnique({
      where: { id: userId },
      select: {
        id: true,
        email: true,
        nombre: true,
        createdAt: true,
      },
    });

    if (!user) {
      res.status(404).json({ error: 'Usuario no encontrado' });
      return;
    }

    res.status(200).json({ usuario: user });
  } catch (error) {
    console.error('Error en me:', error);
    res.status(500).json({ error: 'Error al obtener usuario' });
  }
};
