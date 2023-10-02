const express = require("express");
const genreController = express.Router();
const {
	getAllGenres,
	getGenreById,
	createGenre,
	deleteGenre,
	updateGenre,
} = require("../queries/generosQueries");
const {
	validateGenerosPeliculasPost,
	validateGenerosPeliculasPut,
} = require("../validations/generosValidations");

// Obtener todos los géneros
genreController.get("/", async (req, res) => {
	try {
		const genres = await getAllGenres();
		res.status(200).json(genres);
	} catch (error) {
		res.status(500).json({
			error: "Error fetching genres: " + error.message,
		});
	}
});

// Obtener un género por su ID
genreController.get("/:id", async (req, res) => {
	const { id } = req.params;
	try {
		const genre = await getGenreById(id);
		if (genre) {
			res.status(200).json(genre);
		} else {
			res.status(404).json({ error: "Genre not found" });
		}
	} catch (error) {
		res.status(500).json({
			error: "Error fetching genre: " + error.message,
		});
	}
});

// Crear un nuevo género
genreController.post(
	"/",
	validateGenerosPeliculasPost,
	async (req, res) => {
		const { Nombre, Estado, Descripcion } = req.body;
		try {
			const newGenero = await createGenerosPeliculas(
				Nombre,
				Estado,
				Descripcion
			);
			res.status(200).json(newGenero);
		} catch (error) {
			res.status(500).json({
				error: "Error creating genero: " + error.message,
			});
		}
	}
);

// Eliminar un género por su ID
genreController.delete("/:id", async (req, res) => {
	const { id } = req.params;
	try {
		const deletedGenre = await deleteGenre(id);
		if (deletedGenre) {
			res.status(200).json(deletedGenre);
		} else {
			res.status(404).json({ error: "Genre not found" });
		}
	} catch (error) {
		res.status(500).json({
			error: "Error deleting genre: " + error.message,
		});
	}
});

// Actualizar un género por su ID
genreController.put(
	"/:id",
	validateGenerosPeliculasPut,
	async (req, res) => {
		const { id } = req.params;
		const { Nombre, Estado, Descripcion } = req.body;
		try {
			const updatedGenero = await updateGenerosPeliculas(
				id,
				Nombre,
				Estado,
				Descripcion
			);
			if (updatedGenero) {
				res.status(200).json(updatedGenero);
			} else {
				res.status(404).json({ error: "Genero not found" });
			}
		} catch (error) {
			res.status(500).json({
				error: "Error updating genero: " + error.message,
			});
		}
	}
);

module.exports = genreController;
