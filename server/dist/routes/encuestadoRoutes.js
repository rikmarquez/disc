"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const encuestadoController_1 = require("../controllers/encuestadoController");
const authMiddleware_1 = require("../middleware/authMiddleware");
const router = (0, express_1.Router)();
// Todas las rutas de encuestados requieren autenticación
router.use(authMiddleware_1.authMiddleware);
router.get('/', encuestadoController_1.getEncuestados);
router.get('/:id', encuestadoController_1.getEncuestadoById);
router.post('/', encuestadoController_1.createEncuestado);
router.put('/:id', encuestadoController_1.updateEncuestado);
router.delete('/:id', encuestadoController_1.deleteEncuestado);
exports.default = router;
