app.post("/", (req, res, next) => {
	res.status(200).send(req.body.name)
})

app.get("/", (req,res,next) => {
	res.status(200).send(pokemon)
})

app.get("/:id([0-9]{1,3})", (req, res, next) => {
	const id = req.params.id - 1
	if (id >= 0 && id < 150) {
		res.status(200).send(pokemon[req.params.id - 1])
	} else {
		res.status(404).send("Pokemon no encontrado")
	}
})

app.get("/:name ([A-za-z]+)", (req, res, next) => {
	const name = req.params.name

	const pk = pokemon.filter((p) => {
		return (p.name.toUpperCase() == name.toUpperCase()) ? p : null
	})

	(pk.length > 0) ? 
		res.status(200).send(pk) : 
		res.status(404).send("Pokemon no encontrado")
})