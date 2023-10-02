const express = require("express");
const tipoMultimediaController = express.Router();
const {
	getAllTipoMultimedia,
	getTipoMultimediaById,
	createTipoMultimedia,
	deleteTipoMultimedia,
	updateTipoMultimedia,
} = require("../queries/tiposQueries");

// Obtener todos los tipos de multimedia
tipoMultimediaController.get("/", async (req, res) => {
	try {
		const tiposMultimedia = await getAllTipoMultimedia();
		res.status(200).json(tiposMultimedia);
	} catch (error) {
		res.status(500).json({
			error: "Error fetching tipos de multimedia: " + error.message,
		});
	}
});

// Obtener un tipo de multimedia por su ID
tipoMultimediaController.get("/:id", async (req, res) => {
	const { id } = req.params;
	try {
		const tipoMultimedia = await getTipoMultimediaById(id);
		if (tipoMultimedia) {
			res.status(200).json(tipoMultimedia);
		} else {
			res.status(404).json({ error: "Tipo de multimedia not found" });
		}
	} catch (error) {
		res.status(500).json({
			error: "Error fetching tipo de multimedia: " + error.message,
		});
	}
});

// Crear un nuevo tipo de multimedia
tipoMultimediaController.post("/", async (req, res) => {
	const { Nombre, Descripcion } = req.body;
	try {
		const newTipoMultimedia = await createTipoMultimedia(
			Nombre,
			Descripcion
		);
		res.status(200).json(newTipoMultimedia);
	} catch (error) {
		res.status(500).json({
			error: "Error creating tipo de multimedia: " + error.message,
		});
	}
});

// Eliminar un tipo de multimedia por su ID
tipoMultimediaController.delete("/:id", async (req, res) => {
	const { id } = req.params;
	try {
		const deletedTipoMultimedia = await deleteTipoMultimedia(id);
		if (deletedTipoMultimedia) {
			res.status(200).json(deletedTipoMultimedia);
		} else {
			res.status(404).json({ error: "Tipo de multimedia not found" });
		}
	} catch (error) {
		res.status(500).json({
			error: "Error deleting tipo de multimedia: " + error.message,
		});
	}
});

// Actualizar un tipo de multimedia por su ID
tipoMultimediaController.put("/:id", async (req, res) => {
	const { id } = req.params;
	const { Nombre, Descripcion } = req.body;
	try {
		const updatedTipoMultimedia = await updateTipoMultimedia(
			id,
			Nombre,
			Descripcion
		);
		if (updatedTipoMultimedia) {
			res.status(200).json(updatedTipoMultimedia);
		} else {
			res.status(404).json({ error: "Tipo de multimedia not found" });
		}
	} catch (error) {
		res.status(500).json({
			error: "Error updating tipo de multimedia: " + error.message,
		});
	}
});

module.exports = tipoMultimediaController;
