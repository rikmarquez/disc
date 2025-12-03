import { Router } from 'express';
import {
  validarCodigo,
  obtenerPreguntas,
  guardarRespuesta,
  finalizarEncuesta,
} from '../controllers/encuestaController';

const router = Router();

// Rutas públicas (sin autenticación)
router.post('/validar-codigo', validarCodigo);
router.get('/preguntas', obtenerPreguntas);
router.post('/respuesta', guardarRespuesta);
router.post('/finalizar', finalizarEncuesta);

export default router;
