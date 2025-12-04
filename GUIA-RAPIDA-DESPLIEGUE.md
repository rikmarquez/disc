# 🚀 Guía Rápida - Despliegue Monolítico en Railway

## ✅ Pasos para Desplegar (5 minutos)

### 1. Build Local (REQUERIDO)

```bash
# Construir frontend y backend
npm run build

# Verificar que se crearon las carpetas dist
ls client/dist
ls server/dist
```

### 2. Commit y Push a GitHub

```bash
# Añadir TODO (incluyendo los builds)
git add .

# Commit
git commit -m "Build para despliegue monolítico v0.2.0"

# Push
git push origin main
```

### 3. Configurar en Railway

1. Ir a https://railway.app/
2. New Project → Deploy from GitHub repo
3. Seleccionar tu repositorio `disc`

**Configuración del Servicio:**
- **Build Command:** (dejar vacío)
- **Start Command:** `npm start`

**Variables de Entorno:**
```env
DATABASE_URL=postgresql://postgres:myZKEVDbnppIZINvbSEyWWlPRsKQgeDH@trolley.proxy.rlwy.net:31671/disc
JWT_SECRET=4d0a71d794473ad48a92e3f14abb09aa825b38347d953532cf124d8873dcc12c79799efe97f5b8a8551c9f98282ea3af96ad785be2784bc9fa87dc43e1050a72
NODE_ENV=production
PORT=${{PORT}}
```

### 4. Ejecutar Migraciones (Primera vez)

Después del deploy, en la terminal de Railway:

```bash
npm run prisma:migrate
npm run prisma:seed
```

---

## 🔐 Credenciales de Prueba

Después del seed:
- **Email:** rik@rikmarquez.com
- **Password:** password123

---

## 📋 Checklist Pre-Despliegue

- [ ] Build ejecutado: `npm run build`
- [ ] Carpetas `client/dist/` y `server/dist/` existen
- [ ] Código commiteado con los builds incluidos
- [ ] Push a GitHub completado
- [ ] Variables de entorno configuradas en Railway
- [ ] Migraciones ejecutadas en Railway
- [ ] Seed ejecutado en Railway

---

## 🎯 Arquitectura

**Un solo servicio en Railway que:**
- Sirve API en `/api/*`
- Sirve frontend React en `/*`
- Todo desde un proceso Node.js

**URLs después del deploy:**
- Frontend: `https://tu-app.up.railway.app/`
- API: `https://tu-app.up.railway.app/api`
- Health: `https://tu-app.up.railway.app/health`

---

## 🔄 Actualizar la Aplicación

```bash
# Hacer cambios en el código
# ...

# Build local (IMPORTANTE)
npm run build

# Commit con builds
git add .
git commit -m "Descripción de cambios"
git push origin main

# Railway redesplegará automáticamente
```

---

## ❗ IMPORTANTE

**Railway NO ejecuta build** - El código debe estar pre-compilado en Git.

Por eso:
1. Ejecutas `npm run build` localmente
2. Commiteas las carpetas `dist/`
3. Railway solo ejecuta `npm start`

---

## 📚 Documentación Completa

Ver `DESPLIEGUE-MONOLITICO.md` para más detalles.

---

**Configuración completada:** ✅
**Listo para desplegar:** ✅
