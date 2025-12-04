# Estado del Proyecto

**Última actualización:** 2025-12-04
**Versión:** 0.3.0 (Desplegado en producción)
**Ambiente de despliegue:** Railway (Monolítico)
**URL Producción:** https://disc-production-5e57.up.railway.app

## Objetivo del Proyecto

Aplicación web para realizar encuestas del modelo DISC de perfilado conductual en negocios. Permite a consultores:
- Dar de alta empresas y sus encuestados
- Generar códigos únicos por encuestado
- Portal público para realizar encuestas mediante código
- Sistema de 30 preguntas con 4 opciones (rotativas D/I/S/C)
- Cálculo automático de perfil primario y secundario
- Generación de reportes PDF con arquetipos conductuales

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
- [x] Guardado de respuestas individuales
- [x] Cálculo automático de resultados (D/I/S/C + arquetipos)
- [x] Sistema de preguntas en base de datos (30 preguntas cargadas)
- [ ] Generación de PDF

### Frontend
- [ ] Setup de React + Vite
- [ ] Login de consultores
- [ ] Dashboard principal
- [ ] Gestión de empresas
- [ ] Gestión de encuestados
- [ ] Portal público de encuesta
- [ ] Visualización de resultados
- [ ] Descarga de PDFs

### Base de Datos
- [x] Conexión a Railway configurada
- [x] Schema de Prisma definido
- [x] Migración inicial ejecutada
- [x] Tablas creadas (Usuario, Empresa, Encuestado, Pregunta, Respuesta, Resultado)
- [x] Seed de 30 preguntas ejecutado

## Estado del Despliegue

### ✅ Desplegado Exitosamente en Producción

**Tipo de despliegue:** Monolítico (1 servicio)
**Fecha de despliegue:** 2025-12-04
**Commits principales:**
- `0a480e2` - Fix: Rebuild frontend sin .env para usar rutas relativas
- `e0ed1d0` - Fix: Usar middleware en lugar de route para SPA fallback (Express 5)
- `3f9565a` - Fix: Cambiar wildcard '*' por '/*' para Express 5 compatibility
- `f8a78f0` - Configurar Node.js v20 para Railway
- `0e746f8` - Configurar despliegue monolítico v0.2.0

**Configuración Railway:**
- Build Command: (vacío - código precompilado)
- Start Command: `npm start`
- Node Version: 20.19.6
- Variables: DATABASE_URL, JWT_SECRET, NODE_ENV, PORT

## En Progreso

Ninguna tarea en progreso. Sistema desplegado y funcionando.

## Próximos Pasos

1. **Frontend:**
   - [ ] Completar todas las vistas (Login, Dashboard, etc.)
   - [ ] Desplegar backend
   - [ ] Probar endpoints en producción

2. **Frontend - Setup inicial:**
   - [ ] Crear proyecto React con Vite
   - [ ] Configurar Tailwind CSS
   - [ ] Configurar React Router
   - [ ] Configurar Axios con base URL

3. **Frontend - Autenticación:**
   - [ ] Página de login
   - [ ] Context de autenticación
   - [ ] Protected routes

4. **Frontend - Dashboard Administrativo:**
   - [ ] Panel de empresas
   - [ ] Panel de encuestados
   - [ ] Generación de códigos

5. **Frontend - Portal Público:**
   - [ ] Pantalla de ingreso de código
   - [ ] Flujo de encuesta (una pregunta a la vez)
   - [ ] Pantalla de resultados

6. **Generación de PDFs:**
   - [ ] Implementar generación de PDF con resultados
   - [ ] Endpoint para descarga de PDF

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
- `GET /api/encuesta/preguntas` - Obtener todas las preguntas
- `POST /api/encuesta/respuesta` - Guardar respuesta individual
- `POST /api/encuesta/finalizar` - Finalizar encuesta y calcular resultados

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

- Las preguntas del test rotan sus opciones (A/B/C/D) para evitar sesgos
- Cada pregunta tiene una clave que mapea las opciones a los perfiles D/I/S/C
- Los códigos de encuestados tienen formato DISC-XXXXXX y son únicos
- El portal público NO requiere autenticación, solo código válido
- Al completar la encuesta, se calcula automáticamente: perfil primario + secundario = arquetipo
- 12 arquetipos posibles según la matriz de combinaciones
- Panel administrativo requiere autenticación JWT
- Prisma 7 requiere driver adapter (@prisma/adapter-pg) para PostgreSQL

## Arquetipos Implementados

| Primario | Secundario | Arquetipo |
|----------|-----------|-----------|
| D | I | El Emprendedor (Conquistador) |
| D | C | El Estratega (Arquitecto) |
| D | S | El Director (Mentor) |
| I | D | El Motivador (Entusiasta) |
| I | S | El Comunicador (Inspirador) |
| I | C | El Persuasor (Vendedor) |
| S | D | El Facilitador (Conciliador) |
| S | I | El Colaborador (Embajador) |
| S | C | El Servidor (Protector) |
| C | D | El Analista (Perfeccionista) |
| C | I | El Investigador (Evaluador) |
| C | S | El Técnico (Especialista) |
