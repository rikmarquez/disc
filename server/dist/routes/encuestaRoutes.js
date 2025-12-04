"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const encuestaController_1 = require("../controllers/encuestaController");
const router = (0, express_1.Router)();
// Rutas públicas (sin autenticación)
router.post('/validar-codigo', encuestaController_1.validarCodigo);
router.get('/preguntas', encuestaController_1.obtenerPreguntas);
router.post('/respuesta', encuestaController_1.guardarRespuesta);
// Rutas E9
router.get('/e9/preguntas', encuestaController_1.obtenerPreguntasE9);
router.post('/e9/respuesta', encuestaController_1.guardarRespuestaE9);
router.post('/finalizar', encuestaController_1.finalizarEncuesta);
exports.default = router;
