"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteEncuestado = exports.updateEncuestado = exports.createEncuestado = exports.getEncuestadoById = exports.getEncuestados = void 0;
const database_1 = __importDefault(require("../config/database"));
const codigoGenerator_1 = require("../services/codigoGenerator");
// Listar encuestados (con filtro opcional por empresa)
const getEncuestados = async (req, res) => {
    try {
        const userId = req.userId;
        const { empresaId } = req.query;
        // Construir el where clause
        const whereClause = {
            empresa: {
                usuarioId: userId,
            },
        };
        if (empresaId) {
            whereClause.empresaId = empresaId;
        }
        const encuestados = await database_1.default.encuestado.findMany({
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
    }
    catch (error) {
        console.error('Error en getEncuestados:', error);
        res.status(500).json({ error: 'Error al obtener encuestados' });
    }
};
exports.getEncuestados = getEncuestados;
// Obtener encuestado por ID
const getEncuestadoById = async (req, res) => {
    try {
        const { id } = req.params;
        const userId = req.userId;
        const encuestado = await database_1.default.encuestado.findFirst({
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
    }
    catch (error) {
        console.error('Error en getEncuestadoById:', error);
        res.status(500).json({ error: 'Error al obtener encuestado' });
    }
};
exports.getEncuestadoById = getEncuestadoById;
// Crear encuestado
const createEncuestado = async (req, res) => {
    try {
        const userId = req.userId;
        const { nombre, email, puesto, departamento, empresaId } = req.body;
        // Validar campos requeridos
        if (!nombre || !empresaId) {
            res.status(400).json({ error: 'Nombre y empresaId son requeridos' });
            return;
        }
        // Verificar que la empresa pertenece al usuario
        const empresa = await database_1.default.empresa.findFirst({
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
        const codigo = await (0, codigoGenerator_1.generateUniqueCodigo)();
        // Crear encuestado
        const encuestado = await database_1.default.encuestado.create({
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
    }
    catch (error) {
        console.error('Error en createEncuestado:', error);
        res.status(500).json({ error: 'Error al crear encuestado' });
    }
};
exports.createEncuestado = createEncuestado;
// Actualizar encuestado
const updateEncuestado = async (req, res) => {
    try {
        const { id } = req.params;
        const userId = req.userId;
        const { nombre, email, puesto, departamento } = req.body;
        // Verificar que el encuestado pertenece al usuario
        const encuestadoExistente = await database_1.default.encuestado.findFirst({
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
        const encuestado = await database_1.default.encuestado.update({
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
    }
    catch (error) {
        console.error('Error en updateEncuestado:', error);
        res.status(500).json({ error: 'Error al actualizar encuestado' });
    }
};
exports.updateEncuestado = updateEncuestado;
// Eliminar encuestado
const deleteEncuestado = async (req, res) => {
    try {
        const { id } = req.params;
        const userId = req.userId;
        // Verificar que el encuestado pertenece al usuario
        const encuestado = await database_1.default.encuestado.findFirst({
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
        await database_1.default.encuestado.delete({
            where: { id },
        });
        res.status(200).json({ message: 'Encuestado eliminado exitosamente' });
    }
    catch (error) {
        console.error('Error en deleteEncuestado:', error);
        res.status(500).json({ error: 'Error al eliminar encuestado' });
    }
};
exports.deleteEncuestado = deleteEncuestado;
