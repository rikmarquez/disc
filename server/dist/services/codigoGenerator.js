"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateUniqueCodigo = void 0;
const database_1 = __importDefault(require("../config/database"));
/**
 * Genera un código único para un encuestado
 * Formato: DISC-XXXXXX (donde X son caracteres alfanuméricos)
 */
const generateUniqueCodigo = async () => {
    let codigo;
    let isUnique = false;
    let attempts = 0;
    const maxAttempts = 10;
    while (!isUnique && attempts < maxAttempts) {
        // Generar código aleatorio
        const randomPart = Math.random()
            .toString(36)
            .substring(2, 8)
            .toUpperCase();
        codigo = `DISC-${randomPart}`;
        // Verificar si el código ya existe
        const existing = await database_1.default.encuestado.findUnique({
            where: { codigo },
        });
        if (!existing) {
            isUnique = true;
            return codigo;
        }
        attempts++;
    }
    // Si después de 10 intentos no se genera un código único, agregar timestamp
    const timestamp = Date.now().toString(36).toUpperCase();
    return `DISC-${timestamp}`;
};
exports.generateUniqueCodigo = generateUniqueCodigo;
