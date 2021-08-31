const express = require("express");
const pokemon = express.Router();
const pk = require("../pokedex.json").pokemon

pokemon.post("/", (req, res, next) => {
	res.status(200).send(req.body)
})

pokemon.get("/", (req,res,next) => {
	res.status(200).send(pk)
})

pokemon.get("/:id([0-9]{1,3})", (req, res, next) => {
	const id = req.params.id - 1
	if (id >= 0 && id < 150) {
		res.status(200).send(pk[req.params.id - 1])
	} else {
		res.status(404).send("Pokemon no encontrado")
	}
})

pokemon.get("/:name ([A-za-z]+)", (req, res, next) => {
	const name = req.params.name

	const pkmn = pk.filter((p) => {
		return (p.name.toUpperCase() == name.toUpperCase()) ? p : null
	})

	(pkmn.length > 0) ? 
		res.status(200).send(pkmn) : 
		res.status(404).send("Pokemon no encontrado")
})

module.exports = pokemon