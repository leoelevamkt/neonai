import { Hono } from 'hono';
import { cors } from 'hono/cors';
import { zValidator } from '@hono/zod-validator';
import { z } from 'zod';

type Env = {
  BREVO_API_KEY: string;
};

const app = new Hono<{ Bindings: Env }>();

// Enable CORS for all routes
app.use('*', cors());

// Email submission schema
const emailSchema = z.object({
  name: z.string().min(1, 'Nome é obrigatório'),
  email: z.string().email('Email inválido'),
  profession: z.string().optional(),
  description: z.string().optional()
});

// Contact form endpoint
app.post('/api/contact', zValidator('json', emailSchema), async (c) => {
  try {
    const data = c.req.valid('json');
    const env = c.env;

    const emailContent = `
Novo pedido de ensaio profissional:

Nome: ${data.name}
Email: ${data.email}
Profissão: ${data.profession || 'Não informado'}
Descrição: ${data.description || 'Não informado'}
    `;

    const response = await fetch('https://api.brevo.com/v3/smtp/email', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'api-key': env.BREVO_API_KEY
      },
      body: JSON.stringify({
        sender: {
          name: 'Eleva Marketing',
          email: 'leonardonicolau858@gmail.com'
        },
        to: [{
          email: 'leonardosnicolau@gmail.com',
          name: 'Leonardo Nicolau'
        }],
        subject: `Novo pedido de ensaio - ${data.name}`,
        textContent: emailContent,
        htmlContent: emailContent.replace(/\n/g, '<br>')
      })
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error('Brevo API error:', errorText);
      throw new Error('Falha ao enviar email');
    }

    return c.json({ success: true, message: 'Email enviado com sucesso' });
  } catch (error) {
    console.error('Error sending email:', error);
    return c.json(
      { success: false, error: 'Erro interno do servidor' },
      500
    );
  }
});

// Health check endpoint
app.get('/api/health', (c) => {
  return c.json({ status: 'ok', timestamp: new Date().toISOString() });
});

// Serve static files
app.get('*', async (c) => {
  // This will be handled by the static file serving in production
  return c.text('Not found', 404);
});

export default app;
