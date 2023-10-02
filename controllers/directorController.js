const express = require("express");
const directorController = express.Router();
const {
	getAllDirectors,
	getDirectorById,
	createDirector,
	deleteDirector,
	updateDirector,
} = require("../queries/directorQueries"); 

directorController.get("/", async (req, res) => {
	try {
		const directors = await getAllDirectors();
		res.status(200).json(directors);
	} catch (error) {
		res.status(500).json({
			error: "Error fetching directors: " + error.message,
		});
	}
});

directorController.get("/:id", async (req, res) => {
	const { id } = req.params;
	try {
		const director = await getDirectorById(id);
		if (director) {
			res.status(200).json(director);
		} else {
			res.status(404).json({ error: "Director not found" });
		}
	} catch (error) {
		res.status(500).json({
			error: "Error fetching director: " + error.message,
		});
	}
});

directorController.post("/", async (req, res) => {
	const { Nombres, Estado } = req.body; // Ajusta los campos según tu tabla Director
	try {
		const newDirector = await createDirector(Nombres, Estado);
		res.status(200).json(newDirector);
	} catch (error) {
		res.status(500).json({
			error: "Error creating director: " + error.message,
		});
	}
});

directorController.delete("/:id", async (req, res) => {
	const { id } = req.params;
	try {
		const deletedDirector = await deleteDirector(id);
		if (deletedDirector) {
			res.status(200).json(deletedDirector);
		} else {
			res.status(404).json({ error: "Director not found" });
		}
	} catch (error) {
		res.status(500).json({
			error: "Error deleting director: " + error.message,
		});
	}
});

directorController.put("/:id", async (req, res) => {
	const { id } = req.params;
	const { Nombres, Estado } = req.body; // Ajusta los campos según tu tabla Director
	try {
		const updatedDirector = await updateDirector(id, Nombres, Estado);
		if (updatedDirector) {
			res.status(200).json(updatedDirector);
		} else {
			res.status(404).json({ error: "Director not found" });
		}
	} catch (error) {
		res.status(500).json({
			error: "Error updating director: " + error.message,
		});
	}
});

module.exports = directorController;
