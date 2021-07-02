const inquirer = require("inquirer");

const preguntaUsuario = async () => {
  const respuestas = await inquirer.prompt([
    {
      name: "accion",
      type: "list",
      message: "¿Qué quieres hacer?",
      choices: [
        {
          value: "cargar",
          name: "Listar artículos",
        },
        {
          value: "crear",
          name: "Crear un artículo",
        },
        {
          value: "borrar",
          name: "Borrar un artículo",
        },
        {
          value: "email",
          name: "Enviarle un correo electrónico a tu jefe",
        },
        {
          value: "salir",
          name: "Salir de este programa to guapo",
        },
      ],
    },
    {
      name: "id",
      message: "Indica la id del artículo que quieres borrar",
      type: "number",
      when: (respuestasAnteriores) => respuestasAnteriores.accion === "borrar",
    },
    {
      name: "nombreNuevoArticulo",
      message: "¿Cómo se llama el artículo?",
      type: "input",
      when: (respuestasAnteriores) => respuestasAnteriores.accion === "crear",
    },
    {
      name: "precioNuevoArticulo",
      message: "¿Cuánto vale el artículo?",
      type: "number",
      when: (respuestasAnteriores) => respuestasAnteriores.accion === "crear",
    },
    {
      name: "email",
      message: "¿Cuál es la dirección de correo electrónico de tu jefe?",
      type: "input",
      when: (respuestasAnteriores) => respuestasAnteriores.accion === "email",
    },
    {
      name: "asuntoEmail",
      message: "Asunto del correo",
      type: "input",
      when: (respuestasAnteriores) => respuestasAnteriores.accion === "email",
    },
    {
      name: "cuerpoEmail",
      message: "Escribe el contenido del correo",
      type: "input",
      when: (respuestasAnteriores) => respuestasAnteriores.accion === "email",
    },
  ]);
  console.log(respuestas);
  process.exit(0);
  return respuestas;
};

module.exports = {
  preguntaUsuario,
};
