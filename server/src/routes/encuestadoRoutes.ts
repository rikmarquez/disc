import { Router } from 'express';
import {
  getEncuestados,
  getEncuestadoById,
  createEncuestado,
  updateEncuestado,
  deleteEncuestado,
} from '../controllers/encuestadoController';
import { authMiddleware } from '../middleware/authMiddleware';

const router = Router();

// Todas las rutas de encuestados requieren autenticación
router.use(authMiddleware);

router.get('/', getEncuestados);
router.get('/:id', getEncuestadoById);
router.post('/', createEncuestado);
router.put('/:id', updateEncuestado);
router.delete('/:id', deleteEncuestado);

export default router;
