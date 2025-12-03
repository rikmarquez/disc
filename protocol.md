# Protocolo de Documentación para Claude Code

> **Versión:** 2.0
> **Propósito:** Establecer un sistema de documentación conciso, escalable y útil para proyectos de desarrollo de software.

---

## 📁 Estructura de Documentación

Crear la siguiente estructura en el proyecto:

```
/docs
├── project-status.md       # Estado actual del proyecto (SSOT - Single Source of Truth)
├── technical-specs.md      # Especificaciones técnicas, arquitectura, endpoints, BD
└── session-learnings.md    # Solo decisiones importantes y bugs complejos
```

**En la raíz del proyecto:**
```
CLAUDE.md                   # Instrucciones de inicio para Claude Code
```

---

## 📄 Contenido de Cada Archivo

### `CLAUDE.md` (Raíz del proyecto)

```markdown
# Protocolo de Inicio - Claude Code

## Instrucciones de Inicio de Sesión

Hola Claude Code! Al iniciar cada sesión, por favor:

### 1. Lee la documentación del proyecto

Debes leer estos archivos EN ORDEN:

1. **`docs/project-status.md`** - Para conocer el estado actual
2. **`docs/technical-specs.md`** - Para entender la arquitectura
3. **`docs/session-learnings.md`** - Para aprender de sesiones anteriores

### 2. Proceso de Inicio

Después de leer los archivos:

1. Confirma que comprendes el estado actual del proyecto
2. Resume brevemente:
   - Qué está completo
   - Qué está en progreso
   - Problemas conocidos
3. Pregúntame: **"¿En qué vamos a trabajar hoy?"**

### 3. Durante la Sesión

- Consulta `session-learnings.md` antes de resolver problemas similares
- Si encuentras un error, revisa si hay una solución documentada
- Mantén en mente la estructura de datos y endpoints de `technical-specs.md`

### 4. Al Finalizar la Sesión

Recuérdame actualizar:

- [ ] `project-status.md` - Versión, funcionalidades completadas, próximos pasos
- [ ] `technical-specs.md` - Solo si hubo cambios en arquitectura/BD/endpoints
- [ ] `session-learnings.md` - Solo registrar:
  - Decisiones técnicas importantes (no obvias)
  - Bugs complejos con solución (código)
  - Aprendizajes clave (no repetir lo básico)
  - Actualizar historial de versiones (formato breve)

---

## Estrategia de Documentación

### Qué Documentar en `session-learnings.md`

**✅ SÍ documentar:**
- Decisiones arquitectónicas importantes
- Bugs complejos o no obvios con solución en código
- Aprendizajes que eviten errores futuros
- Trade-offs técnicos evaluados

**❌ NO documentar:**
- Implementaciones estándar (CRUD básico, endpoints REST)
- Configuraciones obvias
- Contexto excesivo o repetitivo
- Pasos detallados que están en commits

### Formatos

**Bugs Resueltos:**
```
### [Título corto]
**Problema:** [Una línea]
**Solución:**
```code```
```

**Decisiones Técnicas:**
```
### [Decisión tomada]
- **Opción elegida:** X
- **Justificación:** [Bullet points breves]
```

**Historial de Versiones:**
```
### v0.X.0 (YYYY-MM-DD)
**Completado:**
- [Bullet points principales]
```

---

## Reglas Importantes

1. **Siempre lee los docs antes de empezar a codear**
2. **Referencia los aprendizajes previos cuando sea relevante**
3. **Sigue las convenciones establecidas en technical-specs.md**
4. **Documentación concisa > Documentación extensa** (calidad sobre cantidad)

---

**Versión del protocolo:** 2.0
```

---

### `docs/project-status.md`

**Propósito:** Estado completo y actual del proyecto (SSOT)

**Estructura:**

```markdown
# Estado del Proyecto

**Última actualización:** YYYY-MM-DD
**Versión:** 0.X.0
**Ambiente de despliegue:** [Railway/Vercel/AWS/etc]

## Objetivo del Proyecto

[Descripción breve del proyecto y su propósito]

## Funcionalidades Completadas

### Infraestructura
- [X] Configuración inicial
- [X] Base de datos configurada
- ...

### Backend
- [X] Autenticación
- [X] CRUD de [entidad]
- ...

### Frontend
- [X] Login
- [X] Dashboard
- ...

### Base de Datos
- [X] Migración inicial
- [X] Tablas principales
- ...

## En Progreso

- [ ] [Funcionalidad actual]
- [ ] [Otra funcionalidad]

## Próximos Pasos

1. **Implementar [módulo]:**
   - [ ] [Tarea específica]
   - [ ] [Otra tarea]

2. **[Otro objetivo]:**
   - [ ] [Tarea]

## Bugs Conocidos

- [Descripción breve del bug]

## Configuración Actual

### Stack Tecnológico

**Frontend:**
- Framework, versiones, librerías

**Backend:**
- Framework, versiones, librerías

**Base de Datos:**
- Motor, versión, ORM

### Endpoints Implementados

**[Módulo]:**
- `GET /api/...` - Descripción
- `POST /api/...` - Descripción

### Variables de Entorno

```env
VARIABLE=valor
```

## Notas Importantes

- [Información crítica del proyecto]
```

---

### `docs/technical-specs.md`

**Propósito:** Especificaciones técnicas, arquitectura, decisiones de diseño

**Estructura:**

```markdown
# Especificaciones Técnicas

## Stack Tecnológico

### Frontend
- **Framework:** [React/Vue/Angular]
- **Build Tool:** [Vite/Webpack]
- **Lenguaje:** [TypeScript/JavaScript]
- **Estilos:** [Tailwind/CSS Modules]

### Backend
- **Runtime:** [Node.js/Python/Go]
- **Framework:** [Express/FastAPI/Gin]
- **ORM:** [Prisma/TypeORM/SQLAlchemy]

### Base de Datos
- **Motor:** [PostgreSQL/MongoDB/MySQL]

## Estructura de Base de Datos

### Model: [NombreModelo]

```prisma
model Example {
  // Definición
}
```

**Campos explicados:**
- `campo`: Descripción del campo

### ENUMs

```prisma
enum Status {
  ACTIVE
  INACTIVE
}
```

## Endpoints API

### [Módulo]

- `GET /api/resource` - Descripción
  - Headers: `Authorization: Bearer <token>`
  - Response: `{ data }`

- `POST /api/resource` - Descripción
  - Body: `{ campos }`
  - Response: `{ data }`

## Arquitectura del Proyecto

### Estructura de Directorios

```
/
├── client/
│   └── src/
│       ├── components/
│       ├── pages/
│       └── services/
├── server/
│   └── src/
│       ├── routes/
│       ├── controllers/
│       └── middleware/
└── docs/
```

### Flujo de Autenticación

1. [Paso 1]
2. [Paso 2]
3. [Paso 3]

## Deploy

### Variables de Entorno

```env
DATABASE_URL=...
PORT=...
```

### Comandos

- Build: `npm run build`
- Start: `npm start`
```

---

### `docs/session-learnings.md`

**Propósito:** Solo decisiones técnicas importantes, bugs complejos y aprendizajes clave

**Estructura:**

```markdown
# Aprendizajes y Soluciones

> **Nota:** Este archivo registra únicamente decisiones técnicas importantes, bugs complejos y aprendizajes clave.
> Para el estado completo del proyecto, ver `project-status.md`.

---

## Decisiones Técnicas Importantes

### [Nombre de la decisión]
- **Contexto:** [Por qué se necesitaba esta decisión]
- **Opción elegida:** [Qué se eligió]
- **Justificación:** [Por qué se eligió]
- **Trade-offs:** [Solo si es relevante]

---

## Bugs Resueltos

### [Título del bug]
**Problema:** [Descripción breve]
**Solución:**
```code
// Código de la solución
```

---

## Aprendizajes Clave

1. **[Aprendizaje 1]:** [Descripción breve]
2. **[Aprendizaje 2]:** [Descripción breve]

---

## Historial de Versiones

### v0.X.0 (YYYY-MM-DD)
**Completado:**
- [Funcionalidad principal 1]
- [Funcionalidad principal 2]

### v0.X-1.0 (YYYY-MM-DD)
**Completado:**
- [Funcionalidad anterior]

---

## Próximas Decisiones Pendientes

- [Decisión a tomar en futuro]
- [Otra decisión pendiente]
```

---

## 🚀 Inicio Rápido de Proyecto

### Paso 1: Crear estructura de documentación

```bash
mkdir docs
touch CLAUDE.md
touch docs/project-status.md
touch docs/technical-specs.md
touch docs/session-learnings.md
```

### Paso 2: Copiar templates

Copiar el contenido de las plantillas de este protocolo en cada archivo.

### Paso 3: Personalizar para tu proyecto

- Actualizar `CLAUDE.md` con contexto específico del proyecto
- Llenar `project-status.md` con objetivo y stack tecnológico
- Definir estructura de BD en `technical-specs.md`
- Dejar `session-learnings.md` con el template base

### Paso 4: Compartir con Claude Code

Al iniciar una nueva sesión:

1. Comparte el archivo `CLAUDE.md`
2. Claude Code leerá los docs en orden
3. Comenzará el desarrollo siguiendo el protocolo

---

## 📊 Principios de Documentación

1. **Conciso sobre extenso** - Calidad sobre cantidad
2. **Actualizar frecuentemente** - Docs desactualizados son peores que no tener docs
3. **Un solo lugar para cada tipo de información** - Evitar duplicación
4. **Enfocado en el "por qué"** - El "qué" está en el código/commits
5. **Útil para el futuro** - Si no te ayudaría en 6 meses, no lo documentes

---

## 🔄 Mantenimiento

### Cada Sesión
- Actualizar `project-status.md` con progreso

### Solo cuando sea relevante
- Agregar a `session-learnings.md` si hay decisión importante o bug complejo
- Actualizar `technical-specs.md` si cambió arquitectura/BD/endpoints

### Nunca
- No duplicar información entre archivos
- No documentar implementaciones obvias
- No escribir tutoriales de lo que ya está en docs oficiales

---

## ✅ Checklist Final de Sesión

Antes de terminar cada sesión de desarrollo:

- [ ] `project-status.md` actualizado con nueva versión y funcionalidades
- [ ] `technical-specs.md` actualizado (solo si hubo cambios en arquitectura)
- [ ] `session-learnings.md` actualizado (solo si hubo decisiones/bugs importantes)
- [ ] Código commiteado con mensajes descriptivos
- [ ] README.md actualizado si cambió setup o instalación

---

**Versión del protocolo:** 2.0
**Creado:** 2025-10-26
**Mantenido por:** [Tu nombre/organización]

---

## 📝 Ejemplo de Uso

Ver el proyecto **Marca Luna** como referencia de implementación de este protocolo:
- [CLAUDE.md](./CLAUDE.md)
- [docs/project-status.md](./docs/project-status.md)
- [docs/technical-specs.md](./docs/technical-specs.md)
- [docs/session-learnings.md](./docs/session-learnings.md)
