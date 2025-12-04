import { Router } from 'express';
import {
  validarCodigo,
  obtenerPreguntas,
  guardarRespuesta,
  finalizarEncuesta,
  obtenerPreguntasE9,
  guardarRespuestaE9,
} from '../controllers/encuestaController';

const router = Router();

// Rutas públicas (sin autenticación)
router.post('/validar-codigo', validarCodigo);
router.get('/preguntas', obtenerPreguntas);
router.post('/respuesta', guardarRespuesta);

// Rutas E9
router.get('/e9/preguntas', obtenerPreguntasE9);
router.post('/e9/respuesta', guardarRespuestaE9);

router.post('/finalizar', finalizarEncuesta);

export default router;
