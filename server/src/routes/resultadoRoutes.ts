import { Router } from 'express';
import { authMiddleware } from '../middleware/authMiddleware';
import prisma from '../config/database';

const router = Router();

// Obtener todos los resultados
router.get('/', authMiddleware, async (req, res) => {
  try {
    const resultados = await prisma.resultado.findMany({
      include: {
        encuestado: {
          include: {
            empresa: {
              select: {
                nombre: true,
              },
            },
          },
        },
      },
      orderBy: {
        createdAt: 'desc',
      },
    });

    const resultadosFormateados = resultados.map((resultado) => ({
      id: resultado.id,
      encuestado: {
        id: resultado.encuestado.id,
        nombre: resultado.encuestado.nombre,
        email: resultado.encuestado.email,
        codigo: resultado.encuestado.codigo,
        empresa: resultado.encuestado.empresa.nombre,
        fechaCompletado: resultado.encuestado.fechaCompletado,
      },
      puntosD: resultado.puntosD,
      puntosI: resultado.puntosI,
      puntosS: resultado.puntosS,
      puntosC: resultado.puntosC,
      perfilPrimario: resultado.perfilPrimario,
      perfilSecundario: resultado.perfilSecundario,
      arquetipo: resultado.arquetipo,
      eneatipo: resultado.eneatipo,
      eneatipoNombre: resultado.eneatipoNombre,
      combinacionE9: resultado.combinacionE9,
      createdAt: resultado.createdAt,
    }));

    res.json({ resultados: resultadosFormateados });
  } catch (error) {
    console.error('Error al obtener resultados:', error);
    res.status(500).json({ error: 'Error al obtener resultados' });
  }
});

// Obtener resultado por ID de encuestado
router.get('/encuestado/:encuestadoId', authMiddleware, async (req, res) => {
  try {
    const { encuestadoId } = req.params;

    const resultado = await prisma.resultado.findUnique({
      where: { encuestadoId },
      include: {
        encuestado: {
          include: {
            empresa: {
              select: {
                nombre: true,
              },
            },
          },
        },
      },
    });

    if (!resultado) {
      res.status(404).json({ error: 'Resultado no encontrado' });
      return;
    }

    res.json({ resultado });
  } catch (error) {
    console.error('Error al obtener resultado:', error);
    res.status(500).json({ error: 'Error al obtener resultado' });
  }
});

export default router;
