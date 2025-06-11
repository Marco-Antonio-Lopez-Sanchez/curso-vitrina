//////////////////////////////////////////////////////////////////////
// const express = require('express'); Sintaxis tradicional
import express from "express";
import dotenv from "dotenv"; // Importa Codigo sin exponer el codigo
import { connectDB } from "./config/db.js";
import productRoutes from "./routes/product.routes.js";
import path from "path"; // Importa el modulo path de node para manejar rutas de archivos
//////////////////////////////////////////////////////////////////////
dotenv.config(); //Importa el codigo de la carpeta config
/////////////////////////////////////////////////////////////////////
const app = express(); // asigna a una constante las funcioes de un servidor express
const PORT = process.env.PORT || 5000;
const __dirname = path.resolve(); // Obtiene el directorio actual del archivo
app.use(express.json()); //Nos permite el uso de JSON en el req.body
///////////////////////////////////////////////////////////////////////////
app.use("/api/products", productRoutes);
if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "/frontend/dist")));
  app.get("/{*any}", (req, res) => {
    res.sendFile(path.resolve(__dirname, "frontend", "dist", "index.html"));
  });
}
///////////////////////////////////////////////////////////////////////
// Cada app.get("/ruta", callback) define una ruta distinta dentro del servidor.
// COMANDO Nombre.get o .post o .del("/Seccion", (req.res)=>{res.send("TextoMostrado");});
//Cuando un usuario accede a http://localhost:5000/seccion verá lo desplegado en dicha seccion
////////////////////////////////////////////////////////////////////////////

//API para la obtencion de productos GET

///////////////////////////////////////////777777777777777777777777
app.listen(PORT, () => {
  connectDB();
  console.log("server started at http://localhost:" + PORT);
});
// 2,3 Llamada al modulo de node express para crear un servidor web en esta caso se le llama app y se le asigna un puerto
// 5,6 se le asigna un puerto y se confirma imprimiendo en la pantalla server started

//Contraseña de MongoDB Basededatos2002
//mongodb+srv://MarcoLopez:<db_password>@cluster0.rpdb2pn.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0
