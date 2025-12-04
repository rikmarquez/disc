import dotenv from 'dotenv';
dotenv.config();

import { PrismaClient } from '@prisma/client';
import { PrismaPg } from '@prisma/adapter-pg';
import { Pool } from 'pg';

const connectionString = process.env.DATABASE_URL!;
const pool = new Pool({ connectionString });
const adapter = new PrismaPg(pool);
const prisma = new PrismaClient({ adapter });

const preguntasE9 = [
  // GRUPO 1
  {
    grupo: 1,
    opcion: 'A',
    texto: 'Tiendo a ser bastante independiente y confiado: pienso que la vida va mejor cuando la esperas de frente. Me fijo objetivos, me comprometo y deseo que ocurran las cosas. No me gusta quedarme sentado, prefiero realizar algo grande y dejar mi huella. No busco necesariamente confrontaciones, pero no me dejo llevar ni empujar tampoco. La mayor parte del tiempo sé lo que quiero y voy a por ello. Tiendo a trabajar mucho y a disfrutar mucho.'
  },
  {
    grupo: 1,
    opcion: 'B',
    texto: 'Tiendo a estar callado, y estoy acostumbrado a estar solo. Normalmente no atraigo mucho la atención en el aspecto social, y por lo general procuro no imponerme por la fuerza. No me siento cómodo destacando sobre los demás ni siendo competitivo. Probablemente muchos dirían que tengo algo de soñador, pues disfruto con mi imaginación. Puedo estar bastante a gusto sin pensar que tengo que ser activo todo el tiempo.'
  },
  {
    grupo: 1,
    opcion: 'C',
    texto: 'Tiendo a ser muy responsable y entregado. Me siento fatal si no cumplo mis compromisos o no hago lo que se espera de mí. Deseo que los demás sepan que estoy por ellos y que haré todo lo que crea que es mejor por ellos. Con frecuencia hago grandes sacrificios personales por el bien de otros, lo sepan o no lo sepan. No suelo cuidar bien de mí mismo; hago el trabajo que hay que hacer y me relajo (y hago lo que realmente deseo) si me queda tiempo.'
  },
  // GRUPO 2
  {
    grupo: 2,
    opcion: 'X',
    texto: 'Soy una persona que normalmente mantiene una actitud positiva y piensa que las cosas se van a resolver para mejor. Suelo entusiasmarme por las cosas y no me cuesta encontrar en qué ocuparme. Me gusta estar con gente y ayudar a otros a ser felices; me agrada compartir con ellos mi bienestar (no siempre me siento tan bien por dentro). Tengo tendencia a ser espontáneo y optimista.'
  },
  {
    grupo: 2,
    opcion: 'Y',
    texto: 'Soy una persona que normalmente mantiene una actitud reservada y cautelosa. Me siento incómodo cuando no sé qué esperar, así que me resulta difícil relajarme y ser descuidado. Tiendo a anticiparme a los problemas y me hago preguntas sobre ellos. No siempre me he sentido seguro o apoyado, así que he aprendido a contar conmigo mismo.'
  },
  {
    grupo: 2,
    opcion: 'Z',
    texto: 'Soy una persona que normalmente mantiene una actitud organizada y ordenada. Soy consciente de cómo me comporto y me preocupo por ser apropiado en cada situación. Mi vida sigue un patrón y me gusta que sea así. No me gusta mucho la confusión, la vulgaridad o el exceso. Mi vida interior es exigente, y a menudo me cuesta relajarme.'
  }
];

async function main() {
  console.log('🌱 Seeding preguntas E9...');

  for (const pregunta of preguntasE9) {
    await prisma.preguntaE9.upsert({
      where: {
        grupo_opcion: {
          grupo: pregunta.grupo,
          opcion: pregunta.opcion
        }
      },
      update: {
        texto: pregunta.texto
      },
      create: pregunta
    });
    console.log(`✅ Pregunta E9 Grupo ${pregunta.grupo} - Opción ${pregunta.opcion} creada`);
  }

  console.log('✅ Seed de E9 completado!');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
    await pool.end();
  });
