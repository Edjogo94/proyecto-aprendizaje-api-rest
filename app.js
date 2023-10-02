const express = require("express");
const path = require("path");

const app = express();

app.get("/", (req, res) => {
	const welcomeMessage = "Bienvenido al servicio de mi API REST";
	const explanation =
		"Esta API REST se utiliza para manejar recursos relacionados con películas y multimedia.";
	const imagePath = path.join(__dirname, "assets", "icon.png");

	res.json({
		message: welcomeMessage,
		explanation: explanation,
		image: imagePath,
	});
});

module.exports = app;
