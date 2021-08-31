// const bodyParser = require('body-parser');

const express = require("express");

const app = express();

const { pokemon } = require("./pokedex.json")

/*
	Verbos HTTP
	-GET (obtener)
	-POST (almacenar/crear)
	-PATCH (modificar parte de un recurso)
	-PUT (modificar recurso completo)
	-DELETE (borrar)

*/


app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res, next) => {
	res.status(200).send("Bienvenido al pokedex")
})

app.listen(process.env.PORT || 3000, () => {
	console.log("Server is running...")
})