-- CreateEnum
CREATE TYPE "StatusEncuesta" AS ENUM ('PENDIENTE', 'EN_PROCESO', 'COMPLETADO');

-- CreateTable
CREATE TABLE "Usuario" (
    "id" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "nombre" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Usuario_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Empresa" (
    "id" TEXT NOT NULL,
    "nombre" TEXT NOT NULL,
    "razonSocial" TEXT,
    "contacto" TEXT,
    "email" TEXT,
    "telefono" TEXT,
    "usuarioId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Empresa_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Encuestado" (
    "id" TEXT NOT NULL,
    "codigo" TEXT NOT NULL,
    "nombre" TEXT NOT NULL,
    "email" TEXT,
    "puesto" TEXT,
    "departamento" TEXT,
    "empresaId" TEXT NOT NULL,
    "status" "StatusEncuesta" NOT NULL DEFAULT 'PENDIENTE',
    "fechaInicio" TIMESTAMP(3),
    "fechaCompletado" TIMESTAMP(3),
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Encuestado_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Respuesta" (
    "id" TEXT NOT NULL,
    "encuestadoId" TEXT NOT NULL,
    "numeroPregunta" INTEGER NOT NULL,
    "opcionSeleccionada" TEXT NOT NULL,
    "perfilAsignado" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Respuesta_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Resultado" (
    "id" TEXT NOT NULL,
    "encuestadoId" TEXT NOT NULL,
    "puntosD" INTEGER NOT NULL,
    "puntosI" INTEGER NOT NULL,
    "puntosS" INTEGER NOT NULL,
    "puntosC" INTEGER NOT NULL,
    "perfilPrimario" TEXT NOT NULL,
    "perfilSecundario" TEXT NOT NULL,
    "arquetipo" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Resultado_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Usuario_email_key" ON "Usuario"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Encuestado_codigo_key" ON "Encuestado"("codigo");

-- CreateIndex
CREATE UNIQUE INDEX "Respuesta_encuestadoId_numeroPregunta_key" ON "Respuesta"("encuestadoId", "numeroPregunta");

-- CreateIndex
CREATE UNIQUE INDEX "Resultado_encuestadoId_key" ON "Resultado"("encuestadoId");

-- AddForeignKey
ALTER TABLE "Empresa" ADD CONSTRAINT "Empresa_usuarioId_fkey" FOREIGN KEY ("usuarioId") REFERENCES "Usuario"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Encuestado" ADD CONSTRAINT "Encuestado_empresaId_fkey" FOREIGN KEY ("empresaId") REFERENCES "Empresa"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Respuesta" ADD CONSTRAINT "Respuesta_encuestadoId_fkey" FOREIGN KEY ("encuestadoId") REFERENCES "Encuestado"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Resultado" ADD CONSTRAINT "Resultado_encuestadoId_fkey" FOREIGN KEY ("encuestadoId") REFERENCES "Encuestado"("id") ON DELETE CASCADE ON UPDATE CASCADE;
