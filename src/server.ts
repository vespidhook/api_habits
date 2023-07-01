import Fastify from 'fastify';
import { PrismaClient } from '@prisma/client';

const app = Fastify();
const prisma = new PrismaClient();

app.get('/', () => {
  return { message: 'HTTP Server running'} 
});

app.get('/habits', () => {
  const habits = prisma.habit.findMany();

  return habits;
});

app.listen({
  host: '0.0.0.0',
  port: process.env.POST ? Number(process.env.PORT) : 3333,
}).then(() => {
  console.log('HTTP Server running');
});