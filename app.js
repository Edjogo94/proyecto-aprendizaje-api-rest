const express = require("express");

const app = express();

app.get("/", (req, res) => {
	console.log(res)
	res.send("Hola, como estas?");
});







module.exports = app;
