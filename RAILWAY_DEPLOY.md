# Guía de Despliegue en Railway (Full-Stack)

Este proyecto despliega **backend + frontend juntos** en UN solo servicio Railway.

## Variables de Entorno Necesarias

Configura estas variables en Railway:

### 1. DATABASE_URL
```
${{Postgres.DATABASE_URL}}
```
O la cadena completa:
```
postgresql://postgres:myZKEVDbnppIZINvbSEyWWlPRsKQgeDH@trolley.proxy.rlwy.net:31671/disc
```

### 2. JWT_SECRET
```
disc_jwt_secret_key_prod_2024_railway
```

### 3. NODE_ENV
```
production
```

---

## Pasos para Desplegar en Railway

### 1. Crear Nuevo Servicio
1. Ve a tu proyecto Railway (donde está tu base de datos PostgreSQL)
2. Click en **"+ New Service"** o **"New"**
3. Selecciona **"GitHub Repo"**
4. Conecta el repositorio: `rikmarquez/disc`

### 2. Configurar Root Directory
⚠️ **IMPORTANTE:**
- **Root Directory:** `server`
- Esto hace que Railway ejecute los comandos desde la carpeta `server/`

### 3. Agregar Variables de Entorno
En la pestaña **"Variables"** del servicio:

```env
DATABASE_URL=${{Postgres.DATABASE_URL}}
JWT_SECRET=disc_jwt_secret_key_prod_2024_railway
NODE_ENV=production
```

**Nota:** Si `${{Postgres.DATABASE_URL}}` no funciona, usa la cadena completa.

### 4. Railway Ejecutará Automáticamente
- **Install:** `npm install`
- **Build:** `npm run build`
  - Compila backend (TypeScript → JavaScript)
  - Compila frontend (React → archivos estáticos)
  - Genera cliente Prisma
- **Start:** `npm start`
  - Express sirve API en `/api/*`
  - Express sirve frontend en todas las demás rutas

### 5. Esperar Deploy
Railway tomará 3-5 minutos en:
1. Instalar dependencias del backend
2. Compilar TypeScript
3. Generar Prisma Client
4. Instalar dependencias del frontend
5. Compilar React/Vite
6. Iniciar servidor

### 6. Ejecutar Seed de Preguntas
**Después del primer deploy exitoso:**

1. Abre el servicio en Railway
2. Ve a la pestaña con 3 puntos (⋯)
3. Selecciona **"Shell"** o busca el botón de terminal
4. Ejecuta:
```bash
npm run seed
```

Deberías ver: `✅ Seed completado: 30 preguntas insertadas exitosamente`

---

## Verificación Post-Despliegue

Railway te dará una URL como: `https://disc-production-xxxx.up.railway.app`

### 1. Verificar Frontend
Abre la URL en tu navegador:
```
https://tu-url-railway.app
```
Deberías ver la aplicación React funcionando.

### 2. Verificar API (Health Check)
```bash
curl https://tu-url-railway.app/health
```
Respuesta esperada:
```json
{"status":"ok","message":"DISC API is running"}
```

### 3. Probar Login
```bash
curl -X POST https://tu-url-railway.app/api/auth/login \
  -H "Content-Type: application/json" \
  -d '{"email":"rik@rikmarquez.com","password":"Acceso979971"}'
```

### 4. Probar API Pública de Encuesta
```bash
curl https://tu-url-railway.app/api/encuesta/preguntas
```
Debería devolver las 30 preguntas.

---

## Cómo Funciona

### En Producción (NODE_ENV=production):

1. **Rutas de API** (`/api/*`):
   - Express maneja las rutas normalmente
   - Responde con JSON

2. **Rutas de Frontend** (cualquier otra):
   - Express sirve archivos estáticos de `client/dist/`
   - Para rutas no encontradas, sirve `index.html` (SPA fallback)
   - React Router maneja la navegación del lado del cliente

### Estructura Después del Build:

```
server/
├── dist/                    # Backend compilado (JS)
│   └── index.js            # Servidor Express
├── node_modules/
└── ../client/dist/          # Frontend compilado (archivos estáticos)
    ├── index.html
    ├── assets/
    └── ...
```

---

## Troubleshooting

### Error: "Cannot find module 'path'"
**Solución:** Ya está incluido, es módulo nativo de Node.js

### Error: Frontend no se ve
**Solución:**
1. Verifica que `NODE_ENV=production` esté configurado
2. Revisa los logs del build para ver si el frontend compiló correctamente
3. Verifica que `client/dist/` se haya creado

### Error: "npm ERR! missing script: build"
**Solución:** Verifica que `client/package.json` tenga el script `build`

### Build tarda mucho
**Normal:** Compilar backend + frontend puede tomar 3-5 minutos

### Cambios no se reflejan
**Solución:** Railway hace redeploy automático con cada push a GitHub

---

## Desarrollo vs Producción

### Desarrollo Local:
```bash
# Terminal 1 - Backend
cd server
npm run dev

# Terminal 2 - Frontend
cd client
npm run dev
```
Frontend: `http://localhost:5173`
Backend: `http://localhost:3000`

### Producción Railway:
- Todo en una URL: `https://tu-url-railway.app`
- Express sirve API y frontend
- Un solo proceso Node.js

---

## Próximos Pasos

1. ✅ Verificar que la app carga
2. ✅ Probar login con tu usuario
3. ✅ Crear empresa de prueba
4. ✅ Crear encuestado y obtener código
5. ✅ Probar encuesta pública con el código
6. 🎨 Desarrollar el frontend completo
7. 🔄 Push a GitHub → Deploy automático en Railway

---

## Actualizar la Aplicación

Cada vez que hagas push a GitHub:
1. Railway detecta el cambio
2. Ejecuta `npm run build` automáticamente
3. Reinicia el servidor
4. Nueva versión desplegada

No necesitas hacer nada manual después del setup inicial.
