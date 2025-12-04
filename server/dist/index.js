"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const path_1 = __importDefault(require("path"));
const database_1 = __importDefault(require("./config/database"));
const authRoutes_1 = __importDefault(require("./routes/authRoutes"));
const empresaRoutes_1 = __importDefault(require("./routes/empresaRoutes"));
const encuestadoRoutes_1 = __importDefault(require("./routes/encuestadoRoutes"));
const encuestaRoutes_1 = __importDefault(require("./routes/encuestaRoutes"));
const preguntaRoutes_1 = __importDefault(require("./routes/preguntaRoutes"));
const resultadoRoutes_1 = __importDefault(require("./routes/resultadoRoutes"));
const app = (0, express_1.default)();
const PORT = process.env.PORT || 3000;
// Middleware
app.use((0, cors_1.default)());
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
// Servir archivos estáticos del frontend (en producción)
if (process.env.NODE_ENV === 'production') {
    const clientBuildPath = path_1.default.join(__dirname, '../../client/dist');
    app.use(express_1.default.static(clientBuildPath));
}
// Health check
app.get('/health', (req, res) => {
    res.json({ status: 'ok', message: 'DISC API is running' });
});
// Routes
app.get('/api', (req, res) => {
    res.json({ message: 'Welcome to DISC API' });
});
// API Routes
console.log('Registering routes...');
app.use('/api/auth', authRoutes_1.default);
console.log('✓ Auth routes registered');
app.use('/api/empresas', empresaRoutes_1.default);
console.log('✓ Empresas routes registered');
app.use('/api/encuestados', encuestadoRoutes_1.default);
console.log('✓ Encuestados routes registered');
app.use('/api/encuesta', encuestaRoutes_1.default); // Rutas públicas de encuesta
console.log('✓ Encuesta routes registered');
app.use('/api/preguntas', preguntaRoutes_1.default);
console.log('✓ Preguntas routes registered');
app.use('/api/resultados', resultadoRoutes_1.default);
console.log('✓ Resultados routes registered');
// SPA fallback - todas las rutas que no son API sirven index.html
if (process.env.NODE_ENV === 'production') {
    app.get('*', (req, res) => {
        const clientBuildPath = path_1.default.join(__dirname, '../../client/dist');
        res.sendFile(path_1.default.join(clientBuildPath, 'index.html'));
    });
}
// Start server
app.listen(PORT, () => {
    console.log(`🚀 Server running on port ${PORT}`);
    console.log(`📊 Environment: ${process.env.NODE_ENV}`);
    console.log(`📝 Public survey routes available at /api/encuesta`);
});
// Graceful shutdown
process.on('SIGINT', async () => {
    await database_1.default.$disconnect();
    process.exit(0);
});
