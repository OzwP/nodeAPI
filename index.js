const express = require("express");

const app = express();

/*
	Verbos HTTP
	-GET
	-POST
	-PATCH
	-PUT
	-DELETE

*/

app.get("/", (req, res, next) => {
	res.status(200)
	res.send("Bienvenido")
})

app.get("/:name", (req,res,next) => {
	console.log(req.params.name)
	res.status(200)
	res.send("Pagina nombre")
} )

app.listen(3000, () => {
	console.log("Server is running...")
})