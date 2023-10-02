const express = require("express");

const app = express();
const directorController = require("./controllers/directorController");
const generosController = require("./controllers/generosController");
const mediaController = require("./controllers/mediaController");
const productoresController = require("./controllers/productoresController");
const tiposController = require("./controllers/tiposController");

app.use(cors());
app.use(express.json());

app.use("/directors", directorController);
app.use("/generos", generosController);
app.use("/media", mediaController);
app.use("/productores", productoresController);
app.use("/tipos", tiposController);

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
