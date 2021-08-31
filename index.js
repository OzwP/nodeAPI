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

app.post("/pokemon", (req, res, next) => {
	res.status(200).send(req.body.name)
})

app.get("/pokemon", (req,res,next) => {
	res.status(200).send(pokemon)
})

app.get("/pokemon/:id([0-9]{1,3})", (req, res, next) => {
	const id = req.params.id - 1
	if (id >= 0 && id < 150) {
		res.status(200).send(pokemon[req.params.id - 1])
	} else {
		res.status(404).send("Pokemon no encontrado")
	}
})

app.get("/pokemon/:name ([A-za-z]+)", (req, res, next) => {
	const name = req.params.name

	const pk = pokemon.filter((p) => {
		return (p.name.toUpperCase() == name.toUpperCase()) ? p : null
	})

	(pk.length > 0) ? 
		res.status(200).send(pk) : 
		res.status(404).send("Pokemon no encontrado")
})

app.listen(process.env.PORT || 3000, () => {
	console.log("Server is running...")
})