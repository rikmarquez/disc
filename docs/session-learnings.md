# Aprendizajes y Soluciones

> **Nota:** Este archivo registra únicamente decisiones técnicas importantes, bugs complejos y aprendizajes clave.
> Para el estado completo del proyecto, ver `project-status.md`.

---

## Decisiones Técnicas Importantes

### Despliegue Monolítico en Railway
**Decisión:** Usar un solo servicio que sirve tanto frontend como backend.

**Arquitectura:**
```
UN SERVICIO en Railway
├── Express sirve archivos estáticos (client/dist/) en /*
├── Express sirve API en /api/*
└── Todo desde un solo proceso Node.js
```

**Configuración Railway:**
- Build Command: (vacío - código precompilado)
- Start Command: `npm start`
- Root Directory: `/`

**Justificación:**
- Más simple de mantener (1 servicio vs 2)
- Sin problemas de CORS entre frontend y backend
- Menor costo en Railway
- Una sola URL para todo
- Build local permite control total sobre assets

**Trade-offs:**
- Requiere commitear código compilado (`client/dist/`, `server/dist/`)
- Build debe ejecutarse localmente antes de push
- `.gitignore` modificado para permitir carpetas `dist/`

### Almacenamiento de Preguntas en Base de Datos
**Decisión:** Almacenar las 30 preguntas del test DISC en la tabla `Pregunta` en lugar de hardcodearlas en el código.

**Justificación:**
- Mayor flexibilidad para editar preguntas sin despliegue
- Facilita traducciones futuras
- Permite versionado de preguntas
- Separación clara de datos vs lógica

**Implementación:**
- Modelo `Pregunta` con campos: numero, bloque, texto, opcionA-D, claveA-D
- Seed script ejecutado para poblar las 30 preguntas
- Endpoint público `GET /api/encuesta/preguntas` NO expone las claves (seguridad)

### Sistema de Cálculo de Resultados DISC
**Decisión:** Cálculo automático en backend al finalizar encuesta.

**Algoritmo:**
1. Contar puntos por perfil (D, I, S, C) según respuestas
2. Ordenar perfiles de mayor a menor puntaje
3. Perfil primario = mayor puntaje
4. Perfil secundario = segundo mayor puntaje
5. Arquetipo = mapeo de combinación primario+secundario

**Justificación:**
- Garantiza consistencia en cálculos
- No expone lógica de negocio al frontend
- Permite auditoría de resultados

### Códigos Únicos de Encuestado
**Decisión:** Formato `DISC-XXXXXX` con generación aleatoria + retry logic.

**Implementación:**
```typescript
// Genera código aleatorio base36
const randomPart = Math.random().toString(36).substring(2, 8).toUpperCase();
const codigo = `DISC-${randomPart}`;
// Si existe, reintenta hasta 10 veces
// Fallback: timestamp para garantizar unicidad
```

**Justificación:**
- Fácil de comunicar verbalmente
- Evita ambigüedades (solo alfanuméricos uppercase)
- Retry logic evita colisiones
- Timestamp fallback garantiza éxito

---

## Bugs Resueltos

### Prisma 7 requiere Driver Adapter
**Problema:** Error `PrismaClientInitializationError: Using engine type "client" requires either "adapter" or "accelerateUrl"`

**Solución:**
```typescript
import { PrismaPg } from '@prisma/adapter-pg';
import { Pool } from 'pg';

const pool = new Pool({ connectionString });
const adapter = new PrismaPg(pool);
const prisma = new PrismaClient({ adapter });
```

**Causa:** Prisma 7 cambió la arquitectura para soportar edge runtimes y requiere adaptadores explícitos.

**Paquetes necesarios:**
```json
{
  "@prisma/adapter-pg": "^7.1.0",
  "pg": "^8.13.1"
}
```

### Variables de Entorno no Cargaban
**Problema:** `dotenv` mostraba "injecting env (0)" - no leía variables del .env

**Solución:**
1. Remover comillas de valores en .env
2. Importar dotenv ANTES de cualquier otro módulo en index.ts:
```typescript
import dotenv from 'dotenv';
dotenv.config();
// Ahora sí importar otros módulos
import express from 'express';
```

**Causa:** Si otro módulo importa database.ts antes de ejecutar dotenv.config(), las variables no están disponibles.

### Campo `numeroPregunta` no Existe
**Problema:** Error TypeScript `numeroPregunta does not exist in type RespuestaOrderByWithRelationInput`

**Solución:**
Cambiar de ordenar por campo directo a incluir relación:
```typescript
// Antes (incorrecto):
respuestas: { orderBy: { numeroPregunta: 'asc' } }

// Después (correcto):
respuestas: {
  include: {
    pregunta: { select: { numero: true } }
  }
}
```

**Causa:** Al migrar de `numeroPregunta: Int` a `preguntaId: String` con relación, se eliminó el campo directo.

### Express 5 no Soporta Wildcard `*` en Rutas
**Problema:** `PathError: Missing parameter name at index 1: *`

**Solución:**
Cambiar de route GET a middleware catch-all:
```typescript
// Antes (NO funciona en Express 5):
app.get('*', (req, res) => { ... })
app.get('/*', (req, res) => { ... })

// Después (funciona en Express 5):
app.use((req, res) => {
  res.sendFile(path.join(__dirname, '../../client/dist/index.html'));
})
```

**Causa:** Express 5 cambió el parsing de rutas y ya no acepta wildcards `*` o `/*` en `app.get()`. Se debe usar middleware.

### Frontend con .env Sobrescribe Default de API_URL
**Problema:** Build de frontend tenía `localhost:3000` hardcodeado a pesar de cambiar el código fuente.

**Solución:**
```typescript
// En api.ts
const API_URL = import.meta.env.VITE_API_URL || '/api';
```

Eliminar `client/.env` antes del build para producción:
```bash
rm client/.env
npm run build:client
```

**Causa:** Vite lee variables de `.env` durante el build y las "inlinea" en el bundle. Si existe `VITE_API_URL=http://localhost:3000/api` en `.env`, sobrescribe el default.

**Solución definitiva:** No commitear `client/.env` en Git. Mantenerlo solo para desarrollo local.

### Railway Requiere Node.js v20 para Prisma 7 y Vite 7
**Problema:** Build fallaba con error de versión de Node.js incompatible.

**Solución:**
Crear archivo `.node-version` en raíz:
```
20
```

Y actualizar `package.json`:
```json
{
  "engines": {
    "node": ">=20.0.0"
  }
}
```

**Causa:** Prisma 7 y Vite 7 requieren Node.js 20+, pero Railway usaba v18 por defecto.

---

## Aprendizajes Clave

### Prisma 7 con PostgreSQL
- Requiere driver adapter (@prisma/adapter-pg + pg)
- `prisma db push` es alternativa a `migrate dev` para desarrollo sin interactividad
- Schema output debe especificarse: `output = "../src/generated/prisma"`

### Express + TypeScript Patterns
- Extender tipos globales para Request:
```typescript
declare global {
  namespace Express {
    interface Request {
      userId?: string;
      userEmail?: string;
    }
  }
}
```

### Seguridad en API Pública
- Endpoint `GET /preguntas` NO expone claves (claveA-D)
- Validación de opciones (A/B/C/D) en backend
- Mapeo de perfil según clave se hace server-side
- Previene manipulación de resultados desde cliente

---

## Historial de Versiones

### v0.3.0 (2025-12-04)
**Completado:**
- Despliegue monolítico exitoso en Railway
- Configuración de Node.js v20 para producción
- Fix de compatibilidad con Express 5 (wildcards en rutas)
- Fix de rutas relativas para API en frontend
- Sistema funcionando en producción: https://disc-production-5e57.up.railway.app

**Decisiones técnicas:**
- Despliegue monolítico (1 servicio) en lugar de 2 servicios separados
- Código precompilado commiteado en Git (Railway no ejecuta build)
- Frontend usa rutas relativas `/api` en lugar de URLs absolutas

### v0.2.0 (2025-12-03)
**Completado:**
- Backend completo con autenticación JWT
- CRUD de Empresas y Encuestados
- Sistema de códigos únicos (DISC-XXXXXX)
- API pública de encuesta (validar, preguntas, respuestas, finalizar)
- Cálculo automático de perfiles y arquetipos
- Seed de 30 preguntas DISC cargadas en BD
- Usuario de prueba: rik@rikmarquez.com creado

### v0.1.0 (2025-12-03)
**Completado:**
- Estructura de documentación creada según protocolo 2.0
- Especificaciones técnicas definidas
- Modelo de base de datos diseñado
- Arquitectura del proyecto definida

---

## Próximas Decisiones Pendientes

- Definir estrategia de generación de PDFs (react-pdf vs jsPDF vs puppeteer)
- ~~Decidir si los códigos de encuestados expiran o son permanentes~~ → Permanentes (decisión tomada)
- ~~Definir si un código puede reutilizarse o es de un solo uso~~ → Un solo uso (status = COMPLETADO previene reutilización)
- Establecer límites de rate limiting para endpoints públicos
- Definir si se permite volver a preguntas anteriores en la encuesta → NO (decisión de negocio)
