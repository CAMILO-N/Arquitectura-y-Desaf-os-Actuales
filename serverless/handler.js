'use strict';

// ── Handler para AWS Lambda + API Gateway ──────────────────────
module.exports.hello = async (event) => {
  // Obtener el parámetro 'name' desde query string
  const name = event.queryStringParameters?.name || 'Mundo';

  return {
    statusCode: 200,
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',   // CORS
    },
    body: JSON.stringify({
      message: `Hola ${name} desde Docker`,
    }),
  };
};

// ── Handler alternativo para Google Cloud Functions ────────────
// exports.hello = (req, res) => {
//   const name = req.query.name || 'Mundo';
//   res.json({ message: `Hola ${name} desde Docker` });
// };

// ── Handler alternativo para Azure Functions ───────────────────
// module.exports = async function (context, req) {
//   const name = req.query.name || 'Mundo';
//   context.res = {
//     body: { message: `Hola ${name} desde Docker` }
//   };
// };
