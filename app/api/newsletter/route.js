import axios from "axios";

function getRequestParams(email) {
  // Obtener variables de entorno
  const API_KEY = process.env.MAILCHIMP_API_KEY;
  const LIST_ID = process.env.MAILCHIMP_LIST_ID;

  // Necesitamos la parte "us6"
  const DATACENTER = process.env.MAILCHIMP_API_KEY.split("-")[1];
  console.log(DATACENTER)

  const url = `https://${DATACENTER}.api.mailchimp.com/3.0/lists/${LIST_ID}/members`;

  // Agregar parámetros adicionales aquí. Consulta la lista completa de parámetros disponibles en:
  // https://mailchimp.com/developer/reference/lists/list-members/
  const data = {
    email_address: email,
    status: "subscribed",
  };

  // La clave de la API debe estar codificada en formato base 64
  const base64ApiKey = Buffer.from(`anystring:${API_KEY}`).toString("base64");
  const headers = {
    "Content-Type": "application/json",
    Authorization: `Basic ${base64ApiKey}`,
  };

  return {
    url,
    data,
    headers,
  };
}

export async function POST(req) {
  try {
    const { email } = await req.json();

    console.log("Email received:", email);

    if (!email || !email.length) {
      console.log("Email is missing");

      return new Response(JSON.stringify({
        error: "Forgot to add your email?",
      }), { status: 400, headers: { 'Content-Type': 'application/json' } });
    }

    const { url, data, headers } = getRequestParams(email);

    // Hacemos la solicitud a Mailchimp
    const response = await axios.post(url, data, { headers });

    // Verificamos el estado de la respuesta de Mailchimp
    if (response.status === 200) {
      // Éxito
      console.log("Mailchimp API success:", response.data);
      return new Response(JSON.stringify({ error: null }), { status: 201, headers: { 'Content-Type': 'application/json' } });
    } else {
      // Error en la respuesta de Mailchimp
      console.error("Mailchimp API error:", response.data);
      throw new Error("Mailchimp API error");
    }
  } catch (error) {
    console.error("Error in catch block:", error);

    return new Response(JSON.stringify({
      error: `Oops, something went wrong... Please send an email at hello@libertum.io and you'll be added to the list.`,
      errorMessage: error.message, // Agregamos el mensaje de error al objeto de respuesta
    }), { status: 400, headers: { 'Content-Type': 'application/json' } });
  }
}