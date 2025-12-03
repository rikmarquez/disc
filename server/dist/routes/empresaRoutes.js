"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const empresaController_1 = require("../controllers/empresaController");
const authMiddleware_1 = require("../middleware/authMiddleware");
const router = (0, express_1.Router)();
// Todas las rutas de empresas requieren autenticación
router.use(authMiddleware_1.authMiddleware);
router.get('/', empresaController_1.getEmpresas);
router.get('/:id', empresaController_1.getEmpresaById);
router.post('/', empresaController_1.createEmpresa);
router.put('/:id', empresaController_1.updateEmpresa);
router.delete('/:id', empresaController_1.deleteEmpresa);
exports.default = router;
