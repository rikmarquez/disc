# Especificaciones Técnicas

## Stack Tecnológico

### Frontend
- **Framework:** React 18
- **Build Tool:** Vite
- **Lenguaje:** TypeScript
- **Estilos:** Tailwind CSS
- **HTTP Client:** Axios
- **Routing:** React Router
- **PDF Generation:** react-pdf o jsPDF

### Backend
- **Runtime:** Node.js v18+
- **Framework:** Express
- **ORM:** Prisma
- **Autenticación:** JWT (jsonwebtoken)
- **Hash de passwords:** Bcrypt
- **Validación:** Express Validator

### Base de Datos
- **Motor:** PostgreSQL 14+
- **Hosting:** Railway
- **Cadena de conexión:** `postgresql://postgres:myZKEVDbnppIZINvbSEyWWlPRsKQgeDH@trolley.proxy.rlwy.net:31671/disc`

## Estructura de Base de Datos

### Model: Usuario (Consultores)

```prisma
model Usuario {
  id         String    @id @default(uuid())
  email      String    @unique
  password   String
  nombre     String
  empresas   Empresa[]
  createdAt  DateTime  @default(now())
  updatedAt  DateTime  @updatedAt
}
```

**Campos explicados:**
- `id`: UUID único del usuario
- `email`: Email único para login
- `password`: Hash bcrypt del password
- `nombre`: Nombre completo del consultor
- `empresas`: Relación 1:N con empresas creadas

### Model: Empresa

```prisma
model Empresa {
  id            String       @id @default(uuid())
  nombre        String
  razonSocial   String?
  contacto      String?
  email         String?
  telefono      String?
  usuarioId     String
  usuario       Usuario      @relation(fields: [usuarioId], references: [id], onDelete: Cascade)
  encuestados   Encuestado[]
  createdAt     DateTime     @default(now())
  updatedAt     DateTime     @updatedAt
}
```

**Campos explicados:**
- `id`: UUID único de la empresa
- `nombre`: Nombre comercial
- `razonSocial`: Razón social legal (opcional)
- `contacto`: Persona de contacto
- `usuarioId`: FK al consultor que la creó
- `encuestados`: Relación 1:N con encuestados

### Model: Encuestado

```prisma
model Encuestado {
  id               String      @id @default(uuid())
  codigo           String      @unique
  nombre           String
  email            String?
  puesto           String?
  departamento     String?
  empresaId        String
  empresa          Empresa     @relation(fields: [empresaId], references: [id], onDelete: Cascade)
  status           StatusEncuesta @default(PENDIENTE)
  fechaInicio      DateTime?
  fechaCompletado  DateTime?
  respuestas       Respuesta[]
  resultado        Resultado?
  createdAt        DateTime    @default(now())
  updatedAt        DateTime    @updatedAt
}
```

**Campos explicados:**
- `codigo`: Código único de 8-10 caracteres (ej: "EMP001-A7B3C9")
- `status`: Estado de la encuesta (PENDIENTE/EN_PROCESO/COMPLETADO)
- `fechaInicio`: Timestamp cuando abrió la primera pregunta
- `fechaCompletado`: Timestamp cuando terminó las 30 preguntas

### Model: Respuesta

```prisma
model Respuesta {
  id                String     @id @default(uuid())
  encuestadoId      String
  encuestado        Encuestado @relation(fields: [encuestadoId], references: [id], onDelete: Cascade)
  numeroPregunta    Int
  opcionSeleccionada String    // A, B, C, D
  perfilAsignado    String     // D, I, S, C
  createdAt         DateTime   @default(now())

  @@unique([encuestadoId, numeroPregunta])
}
```

**Campos explicados:**
- `numeroPregunta`: 1-30
- `opcionSeleccionada`: La letra que eligió (A/B/C/D)
- `perfilAsignado`: El perfil que corresponde según la clave (D/I/S/C)
- Constraint único: Un encuestado solo puede responder cada pregunta una vez

### Model: Resultado

```prisma
model Resultado {
  id               String     @id @default(uuid())
  encuestadoId     String     @unique
  encuestado       Encuestado @relation(fields: [encuestadoId], references: [id], onDelete: Cascade)
  puntosD          Int
  puntosI          Int
  puntosS          Int
  puntosC          Int
  perfilPrimario   String     // D, I, S, C
  perfilSecundario String     // D, I, S, C
  arquetipo        String     // Ej: "El Emprendedor (Conquistador)"
  createdAt        DateTime   @default(now())
}
```

**Campos explicados:**
- `puntosD/I/S/C`: Suma de respuestas por cada perfil (max 30)
- `perfilPrimario`: El perfil con mayor puntaje
- `perfilSecundario`: El perfil con segundo mayor puntaje
- `arquetipo`: Etiqueta según matriz (ej: "D+I = El Emprendedor")

### ENUMs

```prisma
enum StatusEncuesta {
  PENDIENTE
  EN_PROCESO
  COMPLETADO
}
```

## Endpoints API

### Autenticación

- `POST /api/auth/register` - Registro de consultor
  - Body: `{ email, password, nombre }`
  - Response: `{ token, usuario: { id, email, nombre } }`

- `POST /api/auth/login` - Login de consultor
  - Body: `{ email, password }`
  - Response: `{ token, usuario: { id, email, nombre } }`

- `GET /api/auth/me` - Obtener datos del usuario autenticado
  - Headers: `Authorization: Bearer <token>`
  - Response: `{ id, email, nombre }`

### Empresas (Requieren autenticación)

- `GET /api/empresas` - Listar empresas del consultor
  - Headers: `Authorization: Bearer <token>`
  - Response: `{ empresas: [...] }`

- `POST /api/empresas` - Crear empresa
  - Headers: `Authorization: Bearer <token>`
  - Body: `{ nombre, razonSocial?, contacto?, email?, telefono? }`
  - Response: `{ empresa: {...} }`

- `GET /api/empresas/:id` - Obtener empresa por ID
  - Headers: `Authorization: Bearer <token>`
  - Response: `{ empresa: {...} }`

- `PUT /api/empresas/:id` - Actualizar empresa
  - Headers: `Authorization: Bearer <token>`
  - Body: `{ nombre?, razonSocial?, contacto?, email?, telefono? }`
  - Response: `{ empresa: {...} }`

- `DELETE /api/empresas/:id` - Eliminar empresa
  - Headers: `Authorization: Bearer <token>`
  - Response: `{ message: "Empresa eliminada" }`

### Encuestados (Requieren autenticación)

- `GET /api/encuestados` - Listar encuestados (filtrable por empresa)
  - Headers: `Authorization: Bearer <token>`
  - Query: `?empresaId=...`
  - Response: `{ encuestados: [...] }`

- `POST /api/encuestados` - Crear encuestado
  - Headers: `Authorization: Bearer <token>`
  - Body: `{ nombre, email?, puesto?, departamento?, empresaId }`
  - Response: `{ encuestado: {..., codigo: "ABC123XYZ"} }`

- `GET /api/encuestados/:id` - Obtener encuestado por ID
  - Headers: `Authorization: Bearer <token>`
  - Response: `{ encuestado: {...} }`

- `PUT /api/encuestados/:id` - Actualizar encuestado
  - Headers: `Authorization: Bearer <token>`
  - Body: `{ nombre?, email?, puesto?, departamento? }`
  - Response: `{ encuestado: {...} }`

- `DELETE /api/encuestados/:id` - Eliminar encuestado
  - Headers: `Authorization: Bearer <token>`
  - Response: `{ message: "Encuestado eliminado" }`

### Encuesta Pública (NO requiere autenticación)

- `POST /api/encuesta/validar-codigo` - Validar código de encuestado
  - Body: `{ codigo: "ABC123XYZ" }`
  - Response: `{ valido: true, encuestado: { id, nombre, empresa: { nombre } }, progreso: { completadas: 5, total: 30 } }`

- `GET /api/encuesta/preguntas` - Obtener todas las preguntas
  - Response: `{ preguntas: [{numero, texto, opciones: [{letra, texto}]}] }`

- `POST /api/encuesta/respuesta` - Guardar respuesta
  - Body: `{ codigo, numeroPregunta, opcionSeleccionada }`
  - Response: `{ guardado: true, progreso: { completadas: 6, total: 30 } }`

- `POST /api/encuesta/finalizar` - Finalizar y calcular resultados
  - Body: `{ codigo }`
  - Response: `{ completado: true }`

### Resultados (Requieren autenticación)

- `GET /api/resultados/:encuestadoId` - Obtener resultado de un encuestado
  - Headers: `Authorization: Bearer <token>`
  - Response: `{ resultado: { perfilPrimario, perfilSecundario, arquetipo, puntosD, puntosI, puntosS, puntosC } }`

- `GET /api/resultados/:encuestadoId/pdf` - Descargar PDF del resultado
  - Headers: `Authorization: Bearer <token>`
  - Response: PDF file

## Arquitectura del Proyecto

### Estructura de Directorios

```
disc/
├── client/                  # Frontend React
│   ├── public/
│   ├── src/
│   │   ├── components/      # Componentes reutilizables
│   │   ├── pages/           # Páginas/vistas
│   │   │   ├── admin/       # Dashboard, empresas, encuestados
│   │   │   └── public/      # Portal de encuesta
│   │   ├── services/        # API calls (axios)
│   │   ├── context/         # Context API para estado global
│   │   ├── utils/           # Utilidades
│   │   ├── App.tsx
│   │   └── main.tsx
│   ├── package.json
│   └── vite.config.ts
├── server/                  # Backend Express
│   ├── src/
│   │   ├── routes/          # Definición de rutas
│   │   ├── controllers/     # Lógica de negocio
│   │   ├── middleware/      # Auth, validación, etc.
│   │   ├── services/        # Servicios (ej: generador de códigos)
│   │   ├── utils/           # Utilidades
│   │   ├── config/          # Configuración
│   │   └── index.ts         # Entry point
│   ├── prisma/
│   │   └── schema.prisma    # Schema de BD
│   ├── package.json
│   └── tsconfig.json
├── docs/                    # Documentación
│   ├── project-status.md
│   ├── technical-specs.md
│   └── session-learnings.md
├── disc.pdf                 # Documento original del test
├── protocol.md              # Protocolo de trabajo
├── CLAUDE.md                # Instrucciones para Claude
└── README.md
```

### Flujo de Autenticación

1. Usuario (consultor) envía credenciales a `POST /api/auth/login`
2. Backend valida con bcrypt el password hasheado
3. Si es válido, genera JWT con payload: `{ userId, email }`
4. Frontend almacena token en localStorage
5. Cada request protegido incluye header: `Authorization: Bearer <token>`
6. Middleware `authMiddleware` valida el token y anexa `req.user`

### Flujo de Encuesta Pública

1. Encuestado entra a la URL: `/encuesta`
2. Pantalla solicita código único
3. Frontend valida código con `POST /api/encuesta/validar-codigo`
4. Si es válido, muestra primera pregunta
5. Por cada respuesta, envía `POST /api/encuesta/respuesta`
6. No permite retroceder, solo avanzar
7. Al completar 30 preguntas, envía `POST /api/encuesta/finalizar`
8. Backend calcula automáticamente el resultado
9. Muestra pantalla de agradecimiento

### Generación de Códigos Únicos

Algoritmo:
```typescript
function generarCodigo(): string {
  const prefijo = "DISC";
  const random = Math.random().toString(36).substring(2, 8).toUpperCase();
  return `${prefijo}-${random}`; // Ej: "DISC-A7B3C9"
}
```

Validación: verificar que no exista en BD antes de asignar.

### Cálculo de Resultados

Algoritmo:
```typescript
function calcularResultado(encuestadoId: string) {
  // 1. Obtener todas las respuestas (30)
  const respuestas = await prisma.respuesta.findMany({ where: { encuestadoId } });

  // 2. Contar puntos por perfil
  const puntos = { D: 0, I: 0, S: 0, C: 0 };
  respuestas.forEach(r => puntos[r.perfilAsignado]++);

  // 3. Ordenar de mayor a menor
  const ordenado = Object.entries(puntos).sort((a, b) => b[1] - a[1]);

  // 4. Perfil primario y secundario
  const perfilPrimario = ordenado[0][0];
  const perfilSecundario = ordenado[1][0];

  // 5. Buscar arquetipo en matriz
  const arquetipo = MATRIZ_ARQUETIPOS[`${perfilPrimario}+${perfilSecundario}`];

  // 6. Guardar en BD
  await prisma.resultado.create({
    data: {
      encuestadoId,
      puntosD: puntos.D,
      puntosI: puntos.I,
      puntosS: puntos.S,
      puntosC: puntos.C,
      perfilPrimario,
      perfilSecundario,
      arquetipo
    }
  });
}
```

## Deploy

### Variables de Entorno

**Producción (Railway):**
```env
DATABASE_URL=postgresql://postgres:myZKEVDbnppIZINvbSEyWWlPRsKQgeDH@trolley.proxy.rlwy.net:31671/disc
JWT_SECRET=<generar_secreto_seguro>
PORT=3000
NODE_ENV=production
FRONTEND_URL=https://tudominio.com
```

**Desarrollo:**
```env
DATABASE_URL=postgresql://postgres:myZKEVDbnppIZINvbSEyWWlPRsKQgeDH@trolley.proxy.rlwy.net:31671/disc
JWT_SECRET=dev_secret_key
PORT=3000
NODE_ENV=development
FRONTEND_URL=http://localhost:5173
```

### Comandos

**Backend:**
- Install: `npm install`
- Dev: `npm run dev`
- Build: `npm run build`
- Start: `npm start`
- Prisma: `npx prisma migrate dev`
- Prisma Studio: `npx prisma studio`

**Frontend:**
- Install: `npm install`
- Dev: `npm run dev`
- Build: `npm run build`
- Preview: `npm run preview`

## Matriz de Arquetipos

```typescript
const MATRIZ_ARQUETIPOS = {
  "D+I": "El Emprendedor (Conquistador)",
  "D+C": "El Estratega (Arquitecto)",
  "D+S": "El Director Pragmático",
  "I+D": "El Persuasor (Negociador)",
  "I+S": "El Conector (Diplomático)",
  "I+C": "El Creativo Analítico",
  "S+I": "El Colaborador (Mediador)",
  "S+C": "El Técnico Especialista",
  "S+D": "El Ejecutor Tenaz",
  "C+D": "El Perfeccionista (Auditor)",
  "C+S": "El Analista Cauteloso",
  "C+I": "El Crítico Elocuente"
};
```

## Consideraciones de Seguridad

1. **Passwords:** Siempre hashear con bcrypt (salt rounds: 10)
2. **JWT:** Expiración de 7 días, renovar automáticamente
3. **CORS:** Configurar origen permitido según entorno
4. **Rate Limiting:** Implementar en endpoints públicos
5. **Validación:** Validar todos los inputs con Express Validator
6. **SQL Injection:** Prisma protege automáticamente con queries parametrizadas
