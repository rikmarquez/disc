import { Router } from 'express';
import { authMiddleware } from '../middleware/authMiddleware';
import prisma from '../config/database';

const router = Router();

// GET /api/preguntas - Obtener todas las preguntas (requiere autenticación)
router.get('/', authMiddleware, async (req, res) => {
  try {
    const preguntas = await prisma.pregunta.findMany({
      orderBy: { numero: 'asc' },
    });
    res.json({ preguntas });
  } catch (error) {
    console.error('Error al obtener preguntas:', error);
    res.status(500).json({ error: 'Error al obtener preguntas' });
  }
});

// PUT /api/preguntas/:id - Actualizar pregunta (requiere autenticación)
router.put('/:id', authMiddleware, async (req, res) => {
  try {
    const { id } = req.params;
    const { texto, opcionA, opcionB, opcionC, opcionD, claveA, claveB, claveC, claveD } = req.body;

    const pregunta = await prisma.pregunta.update({
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
  } catch (error) {
    console.error('Error al actualizar pregunta:', error);
    res.status(500).json({ error: 'Error al actualizar pregunta' });
  }
});

export default router;
