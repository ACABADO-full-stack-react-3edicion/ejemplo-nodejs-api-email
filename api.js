require("dotenv").config();
const fetch = require("node-fetch");

const urlApi = process.env.URL_API;

const cargarArticulos = async () => {
  const resp = await fetch(process.env.URL_API);
  const articulos = await resp.json();
  return articulos;
};

const borrarArticulo = async (id) => {
  const resp = await fetch(`${urlApi}${id}`, { method: "DELETE" });
  return resp.ok;
};

const crearArticulo = async (articulo) => {
  const resp = await fetch(urlApi, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(articulo),
  });
  const nuevoArticulo = await resp.json();
  return nuevoArticulo;
};

module.exports = {
  cargarArticulos,
  crearArticulo,
  borrarArticulo,
};
