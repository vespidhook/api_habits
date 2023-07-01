import Fastify from 'fastify';

const app = Fastify();

app.get('/', () => {
  return { message: 'HTTP Server running'} 
});

app.listen({
  host: '0.0.0.0',
  port: process.env.POST ? Number(process.env.PORT) : 3333,
}).then(() => {
  console.log('HTTP Server running');
});