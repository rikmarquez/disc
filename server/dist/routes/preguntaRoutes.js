"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const authMiddleware_1 = require("../middleware/authMiddleware");
const database_1 = __importDefault(require("../config/database"));
const router = (0, express_1.Router)();
// GET /api/preguntas - Obtener todas las preguntas (requiere autenticación)
router.get('/', authMiddleware_1.authMiddleware, async (req, res) => {
    try {
        const preguntas = await database_1.default.pregunta.findMany({
            orderBy: { numero: 'asc' },
        });
        res.json({ preguntas });
    }
    catch (error) {
        console.error('Error al obtener preguntas:', error);
        res.status(500).json({ error: 'Error al obtener preguntas' });
    }
});
// PUT /api/preguntas/:id - Actualizar pregunta (requiere autenticación)
router.put('/:id', authMiddleware_1.authMiddleware, async (req, res) => {
    try {
        const { id } = req.params;
        const { texto, opcionA, opcionB, opcionC, opcionD, claveA, claveB, claveC, claveD } = req.body;
        const pregunta = await database_1.default.pregunta.update({
            where: { id },
            data: {
                texto,
                opcionA,
                opcionB,
                opcionC,
                opcionD,
                claveA,
                claveB,
                claveC,
                claveD,
            },
        });
        res.json({ pregunta });
    }
    catch (error) {
        console.error('Error al actualizar pregunta:', error);
        res.status(500).json({ error: 'Error al actualizar pregunta' });
    }
});
exports.default = router;
