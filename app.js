const express = require("express");
const app = express();

const indexRouter = require('./routes/index');

const path = require("path");

const PORT = 3000;
//Convierte lo del formulario en un objeto y este ira como un req.body, aplicado a todas las rutas middelware
app.use(express.urlencoded({ extended : true}));


app.set("views", path.join(__dirname, "views"));
//para hacerle saber que usaremos archivos.ejs
app.set("view engine", "ejs");

//Definimos rutas
app.use('/', indexRouter);


app.listen(PORT, (error) => {
    if(error){
        throw error
    }
    console.log(`Servidor corriendo en el puerto ${PORT}`);
})