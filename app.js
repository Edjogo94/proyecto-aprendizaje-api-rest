const express = require("express");

const app = express();

app.get("/", (req, res) => {
	const welcomeMessage = "Bienvenido al servicio de mi API REST";
	const explanation =
		"Esta API REST se utiliza para manejar recursos relacionados con películas y multimedia.";

	res.json({
		message: welcomeMessage,
		explanation: explanation,
	});
});

module.exports = app;
