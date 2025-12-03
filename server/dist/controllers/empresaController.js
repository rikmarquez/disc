"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteEmpresa = exports.updateEmpresa = exports.createEmpresa = exports.getEmpresaById = exports.getEmpresas = void 0;
const database_1 = __importDefault(require("../config/database"));
// Listar empresas del usuario autenticado
const getEmpresas = async (req, res) => {
    try {
        const userId = req.userId;
        const empresas = await database_1.default.empresa.findMany({
            where: { usuarioId: userId },
            include: {
                _count: {
                    select: { encuestados: true },
                },
            },
            orderBy: { createdAt: 'desc' },
        });
        res.status(200).json({ empresas });
    }
    catch (error) {
        console.error('Error en getEmpresas:', error);
        res.status(500).json({ error: 'Error al obtener empresas' });
    }
};
exports.getEmpresas = getEmpresas;
// Obtener una empresa por ID
const getEmpresaById = async (req, res) => {
    try {
        const { id } = req.params;
        const userId = req.userId;
        const empresa = await database_1.default.empresa.findFirst({
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
    }
    catch (error) {
        console.error('Error en getEmpresaById:', error);
        res.status(500).json({ error: 'Error al obtener empresa' });
    }
};
exports.getEmpresaById = getEmpresaById;
// Crear empresa
const createEmpresa = async (req, res) => {
    try {
        const userId = req.userId;
        const { nombre, razonSocial, contacto, email, telefono } = req.body;
        // Validar campos requeridos
        if (!nombre) {
            res.status(400).json({ error: 'El nombre es requerido' });
            return;
        }
        const empresa = await database_1.default.empresa.create({
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
    }
    catch (error) {
        console.error('Error en createEmpresa:', error);
        res.status(500).json({ error: 'Error al crear empresa' });
    }
};
exports.createEmpresa = createEmpresa;
// Actualizar empresa
const updateEmpresa = async (req, res) => {
    try {
        const { id } = req.params;
        const userId = req.userId;
        const { nombre, razonSocial, contacto, email, telefono } = req.body;
        // Verificar que la empresa pertenece al usuario
        const empresaExistente = await database_1.default.empresa.findFirst({
            where: {
                id,
                usuarioId: userId,
            },
        });
        if (!empresaExistente) {
            res.status(404).json({ error: 'Empresa no encontrada' });
            return;
        }
        const empresa = await database_1.default.empresa.update({
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
    }
    catch (error) {
        console.error('Error en updateEmpresa:', error);
        res.status(500).json({ error: 'Error al actualizar empresa' });
    }
};
exports.updateEmpresa = updateEmpresa;
// Eliminar empresa
const deleteEmpresa = async (req, res) => {
    try {
        const { id } = req.params;
        const userId = req.userId;
        // Verificar que la empresa pertenece al usuario
        const empresa = await database_1.default.empresa.findFirst({
            where: {
                id,
                usuarioId: userId,
            },
        });
        if (!empresa) {
            res.status(404).json({ error: 'Empresa no encontrada' });
            return;
        }
        await database_1.default.empresa.delete({
            where: { id },
        });
        res.status(200).json({ message: 'Empresa eliminada exitosamente' });
    }
    catch (error) {
        console.error('Error en deleteEmpresa:', error);
        res.status(500).json({ error: 'Error al eliminar empresa' });
    }
};
exports.deleteEmpresa = deleteEmpresa;
