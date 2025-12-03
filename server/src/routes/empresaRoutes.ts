import { Router } from 'express';
import {
  getEmpresas,
  getEmpresaById,
  createEmpresa,
  updateEmpresa,
  deleteEmpresa,
} from '../controllers/empresaController';
import { authMiddleware } from '../middleware/authMiddleware';

const router = Router();

// Todas las rutas de empresas requieren autenticación
router.use(authMiddleware);

router.get('/', getEmpresas);
router.get('/:id', getEmpresaById);
router.post('/', createEmpresa);
router.put('/:id', updateEmpresa);
router.delete('/:id', deleteEmpresa);

export default router;
