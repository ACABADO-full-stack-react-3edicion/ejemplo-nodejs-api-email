const chalk = require("chalk");
const { preguntaUsuario } = require("./usuario");
const api = require("./api");
const { enviarCorreo } = require("./email");

const init = async () => {
  console.log("\n");
  const respuestas = await preguntaUsuario();
  switch (respuestas.accion) {
    case "cargar":
      const articulos = await api.cargarArticulos();
      console.log(articulos);
      break;
    case "borrar":
      const borrado = await api.borrarArticulo(respuestas.id);
      console.log(
        chalk.yellow(
          `El artículo con id ${respuestas.id} ${
            borrado ? "ha sido borrado" : chalk.red("no se ha podido borrar")
          }`
        )
      );
      break;
    case "crear":
      const nuevoArticulo = await api.crearArticulo({
        nombre: respuestas.nombreNuevoArticulo,
        precio: respuestas.precioNuevoArticulo,
        comprado: false,
      });
      console.log(chalk.yellow("Se ha creado el siguiente artículo:"));
      console.log(chalk.green(JSON.stringify(nuevoArticulo)));
      break;
    case "email":
      enviarCorreo(
        respuestas.email,
        respuestas.asuntoEmail,
        respuestas.cuerpoEmail
      );
      break;
    case "salir":
      console.log("Tú te lo pierdes.");
      process.exit(0);
  }
  init();
};

init();
