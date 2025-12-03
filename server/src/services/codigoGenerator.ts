import prisma from '../config/database';

/**
 * Genera un código único para un encuestado
 * Formato: DISC-XXXXXX (donde X son caracteres alfanuméricos)
 */
export const generateUniqueCodigo = async (): Promise<string> => {
  let codigo: string;
  let isUnique = false;
  let attempts = 0;
  const maxAttempts = 10;

  while (!isUnique && attempts < maxAttempts) {
    // Generar código aleatorio
    const randomPart = Math.random()
      .toString(36)
      .substring(2, 8)
      .toUpperCase();

    codigo = `DISC-${randomPart}`;

    // Verificar si el código ya existe
    const existing = await prisma.encuestado.findUnique({
      where: { codigo },
    });

    if (!existing) {
      isUnique = true;
      return codigo;
    }

    attempts++;
  }

  // Si después de 10 intentos no se genera un código único, agregar timestamp
  const timestamp = Date.now().toString(36).toUpperCase();
  return `DISC-${timestamp}`;
};
