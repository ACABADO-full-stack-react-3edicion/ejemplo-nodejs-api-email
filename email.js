const nodemailer = require("nodemailer");

const remitente = "programaguapo@node.org";

const transport = nodemailer.createTransport({
  host: "smtp.ethereal.email",
  port: 587,
  auth: {
    user: "brigitte92@ethereal.email",
    pass: "Xjpm2pK2f8bxdF4kgz",
  },
});

const enviarCorreo = (destinatario, asunto, contenido) => {
  const mensaje = {
    from: remitente,
    to: destinatario,
    subject: asunto,
    html: contenido,
  };
  transport.sendMail(mensaje, (err, info) => {
    if (err) {
      console.log("No he podido enviar el correo");
      console.log(err.message);
    } else {
      console.log("Correo enviado");
      console.log(info);
    }
  });
};

module.exports = {
  enviarCorreo,
};
