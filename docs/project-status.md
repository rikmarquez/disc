# Estado del Proyecto

**Última actualización:** 2025-12-05
**Versión:** 0.5.0 (Desplegado en producción)
**Ambiente de despliegue:** Railway (Monolítico)
**URL Producción:** https://disc-production-5e57.up.railway.app

## Objetivo del Proyecto

Aplicación web para realizar encuestas del modelo DISC de perfilado conductual + Eneagrama (E9) en negocios. Permite a consultores:
- Dar de alta empresas y sus encuestados
- Generar códigos únicos por encuestado
- Portal público para realizar encuestas mediante código
- Sistema de 30 preguntas DISC con 4 opciones (rotativas D/I/S/C)
- Sistema de 2 preguntas E9 con 3 opciones cada una (A/B/C, X/Y/Z)
- Cálculo automático de perfil DISC primario y secundario + eneatipo E9
- Generación de reportes PDF con arquetipos conductuales + eneatipo

## Funcionalidades Completadas

### Infraestructura
- [x] Configuración inicial del proyecto
- [x] Base de datos PostgreSQL configurada en Railway
- [x] Estructura de carpetas definida
- [x] Despliegue monolítico en Railway configurado
- [x] Node.js v20 configurado para producción
- [x] Build automático en Railway deshabilitado (código precompilado)

### Backend
- [x] Configuración de Express + Prisma 7 con adaptador PostgreSQL
- [x] Autenticación JWT para consultores
- [x] CRUD de empresas
- [x] CRUD de encuestados
- [x] Generación de códigos únicos (formato DISC-XXXXXX)
- [x] API pública para validar códigos
- [x] Guardado de respuestas individuales DISC
- [x] Guardado de respuestas E9 (Eneagrama)
- [x] Cálculo automático de resultados DISC (D/I/S/C + arquetipos)
- [x] Cálculo automático de eneatipo E9 (1-9)
- [x] Sistema de preguntas DISC en base de datos (30 preguntas cargadas)
- [x] Sistema de preguntas E9 en base de datos (6 opciones cargadas)
- [ ] Generación de PDF con ambos perfiles

### Frontend
- [x] Setup de React + Vite
- [x] Login de consultores
- [x] Dashboard principal
- [x] Gestión de empresas
- [x] Gestión de encuestados
- [x] Portal público de encuesta (ingreso de código)
- [x] Flujo de encuesta DISC (30 preguntas)
- [x] Flujo de encuesta E9 (2 preguntas)
- [x] Pantalla de agradecimiento
- [x] Visualización de resultados en admin
- [ ] Descarga de PDFs

### Base de Datos
- [x] Conexión a Railway configurada
- [x] Schema de Prisma definido
- [x] Migración inicial ejecutada
- [x] Tablas DISC creadas (Usuario, Empresa, Encuestado, Pregunta, Respuesta, Resultado)
- [x] Tablas E9 creadas (PreguntaE9, RespuestaE9)
- [x] Modelo Resultado extendido con campos E9 (eneatipo, eneatipoNombre, combinacionE9)
- [x] Seed de 30 preguntas DISC ejecutado (actualizado 2025-12-05 con preguntas de Paradikma)
- [x] Seed de 6 opciones E9 ejecutado (en producción)

## Estado del Despliegue

### ✅ Desplegado Exitosamente en Producción

**Tipo de despliegue:** Monolítico (1 servicio)
**Fecha de último despliegue:** 2025-12-04
**Última actualización BD:** 2025-12-05 (Actualización de 30 preguntas DISC)
**Commits principales:**
- `c09ca9a` - fix: Agregar campos E9 al endpoint GET /api/resultados
- `7b06d52` - feat: Agregar columna Eneatipo E9 en tabla de resultados admin
- `b0262bd` - fix: Corregir flujo de encuesta - agregar página intermedia E9
- `8f8987d` - feat: Integrar test E9 (Eneagrama) al flujo de encuesta DISC
- `de08d63` - feat: Agregar favicon.ico personalizado

**Configuración Railway:**
- Build Command: (vacío - código precompilado)
- Start Command: `npm start`
- Node Version: 20.19.6
- Variables: DATABASE_URL, JWT_SECRET, NODE_ENV, PORT

## En Progreso

Ninguna tarea en progreso. Sistema desplegado y funcionando.

## Próximos Pasos

1. **Generación de PDFs:**
   - [ ] Implementar generación de PDF con resultados DISC + E9
   - [ ] Endpoint para descarga de PDF
   - [ ] Diseño del reporte PDF (layout, gráficos, descripciones)

2. **Mejoras Futuras (Opcional):**
   - [ ] Exportar resultados a Excel
   - [ ] Gráficos de perfiles DISC
   - [ ] Comparativa de equipos
   - [ ] Estadísticas agregadas por empresa

## Cambios Recientes

### v0.5.0 (2025-12-05) - Actualización de Preguntas DISC
- **Actualizado:** Reemplazo completo de las 30 preguntas DISC por el cuestionario de Paradikma
- **Método:** Script de actualización directa en base de datos de producción
- **Backup:** Preguntas anteriores respaldadas en `server/backup-preguntas-1764918419635.json`
- **Impacto:** Nuevas encuestas usarán las preguntas actualizadas
- **Nota:** Encuestas completadas antes del cambio mantienen sus resultados intactos

## Bugs Conocidos

Ninguno por el momento.

## Configuración Actual

### Stack Tecnológico

**Frontend:**
- React 18
- Vite
- TypeScript
- Tailwind CSS
- Axios
- React Router

**Backend:**
- Node.js v18+
- Express
- TypeScript
- Prisma ORM v7.1.0
- @prisma/adapter-pg (PostgreSQL driver adapter)
- JWT para autenticación
- Bcrypt para passwords

**Base de Datos:**
- PostgreSQL 14+
- Hospedado en Railway
- Cadena de conexión: `postgresql://postgres:myZKEVDbnppIZINvbSEyWWlPRsKQgeDH@trolley.proxy.rlwy.net:31671/disc`

### Endpoints Implementados

**Autenticación:**
- `POST /api/auth/register` - Registro de usuario
- `POST /api/auth/login` - Login de usuario
- `GET /api/auth/me` - Obtener usuario actual (requiere token)

**Empresas (requieren autenticación):**
- `GET /api/empresas` - Listar empresas del usuario
- `GET /api/empresas/:id` - Obtener empresa por ID
- `POST /api/empresas` - Crear empresa
- `PUT /api/empresas/:id` - Actualizar empresa
- `DELETE /api/empresas/:id` - Eliminar empresa

**Encuestados (requieren autenticación):**
- `GET /api/encuestados?empresaId=<id>` - Listar encuestados (filtro opcional por empresa)
- `GET /api/encuestados/:id` - Obtener encuestado por ID
- `POST /api/encuestados` - Crear encuestado (genera código único)
- `PUT /api/encuestados/:id` - Actualizar encuestado
- `DELETE /api/encuestados/:id` - Eliminar encuestado

**Encuesta Pública (sin autenticación):**
- `POST /api/encuesta/validar-codigo` - Validar código de encuesta
- `GET /api/encuesta/preguntas` - Obtener todas las preguntas DISC (30)
- `POST /api/encuesta/respuesta` - Guardar respuesta individual DISC
- `GET /api/encuesta/e9/preguntas` - Obtener preguntas E9 (2 grupos)
- `POST /api/encuesta/e9/respuesta` - Guardar respuesta individual E9
- `POST /api/encuesta/finalizar` - Finalizar encuesta y calcular resultados (DISC + E9)

### Variables de Entorno

**Server (.env):**
```env
DATABASE_URL=postgresql://postgres:myZKEVDbnppIZINvbSEyWWlPRsKQgeDH@trolley.proxy.rlwy.net:31671/disc
JWT_SECRET=disc_jwt_secret_key_dev_2024
PORT=3000
NODE_ENV=development
```

**Client (.env):**
```env
VITE_API_URL=http://localhost:3000/api
```

## Notas Importantes

**DISC:**
- Las preguntas del test DISC rotan sus opciones (A/B/C/D) para evitar sesgos
- Cada pregunta tiene una clave que mapea las opciones a los perfiles D/I/S/C
- 12 arquetipos DISC posibles según la matriz de combinaciones
- Al completar las 30 preguntas DISC, se calcula: perfil primario + secundario = arquetipo

**E9 (Eneagrama):**
- 2 preguntas con 3 opciones cada una (Grupo 1: A/B/C, Grupo 2: X/Y/Z)
- 9 eneatipos posibles según combinación (A-X, A-Y, B-Z, etc.)
- Test E9 es **obligatorio** para completar la encuesta
- Se calcula automáticamente después de completar DISC

**General:**
- Los códigos de encuestados tienen formato DISC-XXXXXX y son únicos
- El portal público NO requiere autenticación, solo código válido
- Panel administrativo requiere autenticación JWT
- Prisma 7 requiere driver adapter (@prisma/adapter-pg) para PostgreSQL
- Resultado final incluye: Perfil DISC + Eneatipo E9

## Arquetipos DISC Implementados

| Primario | Secundario | Arquetipo |
|----------|-----------|-----------|
| D | I | El Emprendedor (Conquistador) |
| D | C | El Estratega (Arquitecto) |
| D | S | El Director Pragmático |
| I | D | El Persuasor (Negociador) |
| I | S | El Conector (Diplomático) |
| I | C | El Creativo Analítico |
| S | D | El Ejecutor Tenaz |
| S | I | El Colaborador (Mediador) |
| S | C | El Técnico Especialista |
| C | D | El Perfeccionista (Auditor) |
| C | I | El Crítico Elocuente |
| C | S | El Analista Cauteloso |

## Eneatipos E9 Implementados

| Combinación | Eneatipo | Nombre |
|-------------|----------|--------|
| A-X | 7 | El Entusiasta |
| A-Y | 8 | El Desafiador |
| A-Z | 3 | El Triunfador |
| B-X | 9 | El Pacificador |
| B-Y | 5 | El Investigador |
| B-Z | 4 | El Individualista |
| C-X | 2 | El Ayudador |
| C-Y | 6 | El Leal |
| C-Z | 1 | El Reformador |
