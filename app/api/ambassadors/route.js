import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { firstName, lastName, email, message } = req.body;

    // Configurar el transporter para el servicio de correo electrónico
    const transporter = nodemailer.createTransport({
      service: 'Gmail',
      auth: {
        user: 'tucorreoelectrónico@gmail.com', // Coloca aquí tu correo electrónico de Gmail
        pass: 'tupassword', // Coloca aquí tu contraseña
      },
    });

    try {
      // Configurar el correo electrónico que se enviará
      const mailOptions = {
        from: 'Tu Nombre <tucorreoelectrónico@gmail.com>',
        to: 'nburgosvega@gmail.com', // Correo electrónico de destino
        subject: 'Nuevo mensaje de formulario',
        text: `
          Nombre: ${firstName} ${lastName}
          Email: ${email}
          Mensaje: ${message}
        `,
      };

      // Enviar el correo electrónico
      const info = await transporter.sendMail(mailOptions);
      console.log('Correo electrónico enviado:', info.response);

      res.status(200).json({ message: 'Correo electrónico enviado exitosamente' });
    } catch (error) {
      console.error('Error al enviar el correo electrónico:', error);
      res.status(500).json({ message: 'Error al enviar el correo electrónico' });
    }
  } else {
    res.status(405).json({ message: 'Método no permitido' });
  }
}
