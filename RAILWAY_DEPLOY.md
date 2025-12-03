# Guía de Despliegue en Railway

## Variables de Entorno Necesarias

Configura estas variables en Railway para tu servicio:

### 1. DATABASE_URL
```
postgresql://postgres:myZKEVDbnppIZINvbSEyWWlPRsKQgeDH@trolley.proxy.rlwy.net:31671/disc
```
**Nota:** Esta es tu base de datos PostgreSQL existente en Railway.

### 2. JWT_SECRET
```
disc_jwt_secret_key_prod_2024_railway
```
**Nota:** Usa un secret diferente para producción (este es más seguro que el de dev).

### 3. NODE_ENV
```
production
```

### 4. PORT
```
3000
```
**Nota:** Railway asignará automáticamente un puerto, pero Express escuchará en el especificado.

---

## Pasos para Desplegar en Railway

### 1. Conectar Repositorio GitHub
1. Ve a [Railway](https://railway.app)
2. Click en "New Project"
3. Selecciona "Deploy from GitHub repo"
4. Autoriza Railway a acceder a tu GitHub
5. Selecciona el repositorio `rikmarquez/disc`

### 2. Configurar el Servicio
1. Railway detectará automáticamente que es un proyecto Node.js
2. Asegúrate de que el **Root Directory** esté configurado a: `server`
3. Railway usará estos comandos por defecto:
   - **Build Command:** `npm install && npx prisma generate`
   - **Start Command:** `npm start`

### 3. Agregar Variables de Entorno
En el dashboard de Railway, ve a la pestaña "Variables" y agrega:

```env
DATABASE_URL=postgresql://postgres:myZKEVDbnppIZINvbSEyWWlPRsKQgeDH@trolley.proxy.rlwy.net:31671/disc
JWT_SECRET=disc_jwt_secret_key_prod_2024_railway
NODE_ENV=production
PORT=3000
```

### 4. Configurar Build y Start Scripts
Verifica que tu `server/package.json` tenga estos scripts:

```json
{
  "scripts": {
    "start": "node dist/index.js",
    "build": "tsc",
    "dev": "nodemon --exec ts-node src/index.ts"
  }
}
```

**IMPORTANTE:** Necesitamos compilar TypeScript para producción.

### 5. Ejecutar Seed de Preguntas
Después del primer despliegue, necesitas ejecutar el seed:

**Opción A - Desde Railway CLI:**
```bash
railway run npx ts-node prisma/seed.ts
```

**Opción B - Desde el dashboard de Railway:**
1. Ve a la pestaña de tu servicio
2. Abre una terminal
3. Ejecuta: `npm run seed` (si agregamos el script)

---

## Archivos que Faltan Agregar

### 1. Crear Script de Build en package.json
Agrega estos scripts a `server/package.json`:

```json
{
  "scripts": {
    "start": "node dist/index.js",
    "build": "tsc && npx prisma generate",
    "dev": "nodemon --exec ts-node src/index.ts",
    "seed": "npx ts-node prisma/seed.ts",
    "prisma:generate": "npx prisma generate",
    "prisma:push": "npx prisma db push"
  }
}
```

### 2. Crear archivo .railwayignore (opcional)
Para excluir archivos innecesarios del despliegue:

```
node_modules/
.env
*.log
.DS_Store
src/
*.ts
!*.d.ts
```

---

## Verificación Post-Despliegue

### 1. Verificar que el servidor esté corriendo
Railway te dará una URL pública, algo como: `https://disc-production.up.railway.app`

Prueba el health check:
```bash
curl https://tu-url-railway.app/health
```

Deberías ver:
```json
{"status":"ok","message":"DISC API is running"}
```

### 2. Probar Endpoints

**Login:**
```bash
curl -X POST https://tu-url-railway.app/api/auth/login \
  -H "Content-Type: application/json" \
  -d '{"email":"rik@rikmarquez.com","password":"Acceso979971"}'
```

**Obtener Preguntas (público):**
```bash
curl https://tu-url-railway.app/api/encuesta/preguntas
```

### 3. Verificar Base de Datos
Asegúrate de que las tablas existen y las preguntas están cargadas:
```bash
railway run npx prisma studio
```

---

## Troubleshooting

### Error: "Cannot find module"
**Solución:** Asegúrate de que el build command incluya `npx prisma generate`

### Error: "DATABASE_URL is required"
**Solución:** Verifica que las variables de entorno estén configuradas correctamente

### Error: "Port already in use"
**Solución:** Railway asigna el puerto automáticamente. No uses un puerto fijo en producción.

### El servidor se inicia pero no responde
**Solución:** Verifica los logs en Railway dashboard para ver errores específicos

---

## Configuración de CORS para Frontend

Cuando despliegues el frontend, actualiza el CORS en `server/src/index.ts`:

```typescript
app.use(cors({
  origin: [
    'http://localhost:5173', // Dev
    'https://tu-frontend.vercel.app' // Producción
  ]
}));
```

---

## Próximos Pasos Después del Despliegue

1. ✅ Verificar que el backend responde
2. ✅ Probar login con tu usuario
3. ✅ Crear una empresa de prueba
4. ✅ Crear un encuestado de prueba
5. ✅ Probar la API pública de encuesta con el código generado
6. 📱 Comenzar desarrollo del frontend apuntando a la URL de Railway
