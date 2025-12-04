# 🚀 Guía de Despliegue Monolítico - Sistema DISC

## 📋 Resumen

Este proyecto está configurado para desplegarse como **UN SOLO SERVICIO** en Railway que:
- Sirve la API backend en `/api/*`
- Sirve el frontend React en `/*`
- Todo desde un único proceso Node.js

---

## ⚙️ Variables de Entorno para Railway

Configura estas variables en Railway → Tu Servicio → Variables:

```env
DATABASE_URL=postgresql://postgres:myZKEVDbnppIZINvbSEyWWlPRsKQgeDH@trolley.proxy.rlwy.net:31671/disc
JWT_SECRET=4d0a71d794473ad48a92e3f14abb09aa825b38347d953532cf124d8873dcc12c79799efe97f5b8a8551c9f98282ea3af96ad785be2784bc9fa87dc43e1050a72
NODE_ENV=production
PORT=${{PORT}}
```

---

## 🎯 Configuración en Railway

### 1. Crear Nuevo Proyecto

1. Ve a https://railway.app/
2. Click en "New Project"
3. Selecciona "Deploy from GitHub repo"
4. Selecciona tu repositorio `disc`

### 2. Configurar el Servicio Único

**Root Directory:** (dejar vacío o `/`)

**Build Command:** (dejar vacío - usamos código precompilado)

**Start Command:**
```bash
npm start
```

**Variables de Entorno:** (copiar las de arriba)

**⚠️ IMPORTANTE:** Railway NO ejecuta build. El código debe estar pre-compilado en Git.

### 3. Ejecutar Migraciones

Después del primer despliegue, abre la terminal en Railway y ejecuta:

```bash
npm run prisma:migrate
npm run prisma:seed
```

---

## 📦 Scripts Disponibles

El `package.json` raíz tiene estos scripts:

- `npm run build` - Construye frontend + backend
- `npm start` - Inicia el servidor en producción
- `npm run prisma:migrate` - Ejecuta migraciones de BD
- `npm run prisma:seed` - Carga datos iniciales

### Build Detallado

Cuando ejecutas `npm run build`:
1. Construye el frontend React → `client/dist/`
2. Genera cliente de Prisma
3. Compila TypeScript del backend → `server/dist/`

### Producción

Cuando ejecutas `npm start`:
1. Node.js corre `server/dist/index.js`
2. Express sirve archivos estáticos desde `client/dist/`
3. Express sirve API en `/api/*`
4. Cualquier ruta no-API sirve `client/dist/index.html` (SPA routing)

---

## 🗂️ Estructura Después del Build

```
disc/
├── package.json          <- Scripts de build monolítico
├── client/
│   ├── src/              <- Código fuente React
│   ├── dist/             <- ⚡ Build del frontend (generado)
│   │   ├── index.html
│   │   └── assets/
│   └── package.json
├── server/
│   ├── src/              <- Código fuente Express
│   ├── dist/             <- ⚡ Build del backend (generado)
│   │   └── index.js      <- Entry point en producción
│   ├── prisma/
│   │   └── schema.prisma
│   └── package.json
└── .gitignore
```

---

## 🔐 Credenciales por Defecto

Después de ejecutar el seed:

```
Email: rik@rikmarquez.com
Password: password123
```

**⚠️ IMPORTANTE:** Cambia esto después del primer login en producción.

---

## ✅ Checklist Pre-Despliegue

**ANTES de hacer push a Git:**

- [x] `.gitignore` configurado para permitir `dist/`
- [x] Archivos `.env` NO están en Git
- [x] `package.json` raíz con scripts de build
- [x] Backend configurado para servir frontend en producción
- [ ] **Ejecutar build local:** `npm run build`
- [ ] **Verificar que existen:** `client/dist/` y `server/dist/`
- [ ] **Commitear el código compilado** (dist incluido)
- [ ] Base de datos PostgreSQL creada en Railway

---

## 🧪 Probar Localmente

### 1. Build Local

```bash
# Construir todo
npm run build

# Verificar que se crearon:
# - client/dist/
# - server/dist/
```

### 2. Probar en Modo Producción

```bash
# Setear variable de entorno
set NODE_ENV=production

# Iniciar servidor
npm start

# Abrir navegador en http://localhost:3000
```

**Nota:** En Windows usa `set`, en Linux/Mac usa `export`

---

## 📝 Proceso Completo de Despliegue

### Paso 1: Build Local

```bash
# Construir frontend y backend
npm run build

# Verificar que se crearon las carpetas:
# - client/dist/ (con index.html y assets/)
# - server/dist/ (con index.js y otros archivos .js)
dir client\dist
dir server\dist
```

### Paso 2: Commitear Código Compilado

```bash
# Ver estado (debería mostrar client/dist y server/dist)
git status

# Añadir TODO incluyendo los builds
git add .

# Crear commit con código compilado
git commit -m "Build para despliegue monolítico v0.2.0"

# Push a GitHub (Railway lo detectará automáticamente)
git push origin main
```

**⚠️ CRÍTICO:** El código compilado (`client/dist/` y `server/dist/`) DEBE estar en Git para Railway.

---

## 🔗 URLs Post-Despliegue

Una vez desplegado tendrás **UNA SOLA URL**:

**URL Principal:** `https://tu-app.up.railway.app`

Endpoints:
- Frontend: `https://tu-app.up.railway.app/`
- Login: `https://tu-app.up.railway.app/login`
- Encuesta: `https://tu-app.up.railway.app/encuesta`
- API Health: `https://tu-app.up.railway.app/health`
- API Base: `https://tu-app.up.railway.app/api`

---

## 🐛 Solución de Problemas

### Build falla en Railway

**Síntoma:** Error durante `npm run build`

**Solución:**
1. Verifica logs en Railway → Deployments → Build Logs
2. Asegúrate de que ambos `package.json` (client y server) tienen `build` scripts
3. Verifica que `client/dist/` y `server/dist/` se generan localmente

### Frontend muestra 404

**Síntoma:** Rutas del frontend no funcionan

**Solución:**
1. Verifica que `NODE_ENV=production` esté configurado
2. Confirma que `client/dist/` tiene `index.html`
3. Revisa logs del servidor para ver si está sirviendo archivos estáticos

### API no responde

**Síntoma:** Fetch a `/api/*` falla

**Solución:**
1. Verifica que `DATABASE_URL` esté correcta
2. Ejecuta migraciones: `npm run prisma:migrate`
3. Revisa logs para errores de conexión a BD

### Variables de entorno no cargan

**Síntoma:** Server no puede conectar a BD

**Solución:**
1. En Railway, ve a Variables y verifica que estén todas
2. Reconstruye el servicio: Railway → Deployments → Redeploy
3. No uses comillas en los valores de las variables

---

## 🔄 Actualizar el Proyecto

```bash
# Hacer cambios en el código
# ...

# Commit y push
git add .
git commit -m "Descripción de cambios"
git push origin main

# Railway redesplegaría automáticamente
```

---

## 📊 Monitoreo

**Logs del Servidor:**
- Railway → Tu Servicio → Logs

**Base de Datos:**
- Railway → PostgreSQL → Data
- O usa Prisma Studio localmente: `npx prisma studio`

**Métricas:**
- Railway → Tu Servicio → Metrics

---

## 🎯 Ventajas del Despliegue Monolítico

✅ **Un solo servicio** = más simple de gestionar
✅ **Sin CORS** entre frontend y backend
✅ **Menos costos** en Railway
✅ **Una sola URL** = más fácil de configurar
✅ **Routing unificado** = mejor SEO

---

## 📞 Soporte

Si tienes problemas:
1. Revisa los logs en Railway
2. Verifica que las variables de entorno estén correctas
3. Prueba el build localmente primero

---

**Última actualización:** 2025-12-03
**Versión:** 0.2.0
**Tipo de Despliegue:** Monolítico (Un solo servicio)
