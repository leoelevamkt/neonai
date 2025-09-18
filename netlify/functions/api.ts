import type { Context } from "@netlify/functions";

export default async (request: Request, context: Context) => {
  // Enable CORS
  if (request.method === 'OPTIONS') {
    return new Response(null, {
      status: 200,
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
        'Access-Control-Allow-Headers': 'Content-Type, Authorization',
      },
    });
  }

  const url = new URL(request.url);
  const path = url.pathname;

  // Contact form endpoint
  if (path === '/api/contact' && request.method === 'POST') {
    try {
      const data = await request.json();
      
      // Basic validation
      if (!data.name || !data.email) {
        return new Response(
          JSON.stringify({ success: false, error: 'Nome e email são obrigatórios' }),
          { 
            status: 400, 
            headers: { 
              'Content-Type': 'application/json',
              'Access-Control-Allow-Origin': '*'
            } 
          }
        );
      }

      const emailContent = `
Novo pedido de ensaio profissional:

Nome: ${data.name}
Email: ${data.email}
Profissão: ${data.profession || 'Não informado'}
Link da foto: ${data.photoLink || 'Não informado'}
Descrição: ${data.description || 'Não informado'}
      `;

      const response = await fetch('https://api.brevo.com/v3/smtp/email', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          'api-key': process.env.BREVO_API_KEY || ''
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

      return new Response(
        JSON.stringify({ success: true, message: 'Email enviado com sucesso' }),
        { 
          status: 200, 
          headers: { 
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*'
          } 
        }
      );
    } catch (error) {
      console.error('Error sending email:', error);
      return new Response(
        JSON.stringify({ success: false, error: 'Erro interno do servidor' }),
        { 
          status: 500, 
          headers: { 
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*'
          } 
        }
      );
    }
  }

  // Health check endpoint
  if (path === '/api/health' && request.method === 'GET') {
    return new Response(
      JSON.stringify({ status: 'ok', timestamp: new Date().toISOString() }),
      { 
        status: 200, 
        headers: { 
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*'
        } 
      }
    );
  }

  return new Response('Not found', { 
    status: 404,
    headers: { 'Access-Control-Allow-Origin': '*' }
  });
};
