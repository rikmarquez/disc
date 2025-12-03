import dotenv from 'dotenv';
dotenv.config();

import express, { Application, Request, Response } from 'express';
import cors from 'cors';
import path from 'path';
import prisma from './config/database';
import authRoutes from './routes/authRoutes';
import empresaRoutes from './routes/empresaRoutes';
import encuestadoRoutes from './routes/encuestadoRoutes';
import encuestaRoutes from './routes/encuestaRoutes';

const app: Application = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Servir archivos estáticos del frontend (en producción)
if (process.env.NODE_ENV === 'production') {
  const clientBuildPath = path.join(__dirname, '../../client/dist');
  app.use(express.static(clientBuildPath));
}

// Health check
app.get('/health', (req: Request, res: Response) => {
  res.json({ status: 'ok', message: 'DISC API is running' });
});

// Routes
app.get('/api', (req: Request, res: Response) => {
  res.json({ message: 'Welcome to DISC API' });
});

// API Routes
console.log('Registering routes...');
app.use('/api/auth', authRoutes);
console.log('✓ Auth routes registered');
app.use('/api/empresas', empresaRoutes);
console.log('✓ Empresas routes registered');
app.use('/api/encuestados', encuestadoRoutes);
console.log('✓ Encuestados routes registered');
app.use('/api/encuesta', encuestaRoutes); // Rutas públicas de encuesta
console.log('✓ Encuesta routes registered');

// SPA fallback - todas las rutas que no son API sirven index.html
if (process.env.NODE_ENV === 'production') {
  app.get('*', (req: Request, res: Response) => {
    const clientBuildPath = path.join(__dirname, '../../client/dist');
    res.sendFile(path.join(clientBuildPath, 'index.html'));
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
  await prisma.$disconnect();
  process.exit(0);
});
