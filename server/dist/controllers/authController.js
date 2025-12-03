"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.me = exports.login = exports.register = void 0;
const database_1 = __importDefault(require("../config/database"));
const password_1 = require("../utils/password");
const jwt_1 = require("../utils/jwt");
// Register
const register = async (req, res) => {
    try {
        const { email, password, nombre } = req.body;
        // Validar campos requeridos
        if (!email || !password || !nombre) {
            res.status(400).json({ error: 'Email, password y nombre son requeridos' });
            return;
        }
        // Verificar si el usuario ya existe
        const existingUser = await database_1.default.usuario.findUnique({
            where: { email },
        });
        if (existingUser) {
            res.status(400).json({ error: 'El email ya está registrado' });
            return;
        }
        // Hashear password
        const hashedPassword = await (0, password_1.hashPassword)(password);
        // Crear usuario
        const user = await database_1.default.usuario.create({
            data: {
                email,
                password: hashedPassword,
                nombre,
            },
        });
        // Generar token
        const token = (0, jwt_1.generateToken)({
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
    }
    catch (error) {
        console.error('Error en register:', error);
        res.status(500).json({ error: 'Error al registrar usuario' });
    }
};
exports.register = register;
// Login
const login = async (req, res) => {
    try {
        const { email, password } = req.body;
        // Validar campos requeridos
        if (!email || !password) {
            res.status(400).json({ error: 'Email y password son requeridos' });
            return;
        }
        // Buscar usuario
        const user = await database_1.default.usuario.findUnique({
            where: { email },
        });
        if (!user) {
            res.status(401).json({ error: 'Credenciales inválidas' });
            return;
        }
        // Verificar password
        const isValidPassword = await (0, password_1.comparePassword)(password, user.password);
        if (!isValidPassword) {
            res.status(401).json({ error: 'Credenciales inválidas' });
            return;
        }
        // Generar token
        const token = (0, jwt_1.generateToken)({
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
    }
    catch (error) {
        console.error('Error en login:', error);
        res.status(500).json({ error: 'Error al iniciar sesión' });
    }
};
exports.login = login;
// Get current user
const me = async (req, res) => {
    try {
        // @ts-ignore - userId será agregado por el middleware de autenticación
        const userId = req.userId;
        const user = await database_1.default.usuario.findUnique({
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
    }
    catch (error) {
        console.error('Error en me:', error);
        res.status(500).json({ error: 'Error al obtener usuario' });
    }
};
exports.me = me;
