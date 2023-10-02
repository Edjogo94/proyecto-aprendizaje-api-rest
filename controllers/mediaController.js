const express = require("express");
const mediaController = express.Router();
const {
	getAllMedia,
	getMediaById,
	createMedia,
	deleteMedia,
	updateMedia,
} = require("../queries/mediaQueries");

// Obtener todos los medios
mediaController.get("/", async (req, res) => {
	try {
		const media = await getAllMedia();
		res.status(200).json(media);
	} catch (error) {
		res.status(500).json({
			error: "Error fetching media: " + error.message,
		});
	}
});

// Obtener un medio por su Serial
mediaController.get("/:serial", async (req, res) => {
	const { serial } = req.params;
	try {
		const medium = await getMediaById(serial);
		if (medium) {
			res.status(200).json(medium);
		} else {
			res.status(404).json({ error: "Media not found" });
		}
	} catch (error) {
		res.status(500).json({
			error: "Error fetching media: " + error.message,
		});
	}
});

// Crear un nuevo medio
mediaController.post("/", async (req, res) => {
	const {
		Titulo,
		Sinopsis,
		URL,
		ImagenPortada,
		AnioEstreno,
		GeneroID,
		DirectorID,
		ProductoraID,
		TipoID,
	} = req.body;
	try {
		const newMedia = await createMedia(
			Titulo,
			Sinopsis,
			URL,
			ImagenPortada,
			AnioEstreno,
			GeneroID,
			DirectorID,
			ProductoraID,
			TipoID
		);
		res.status(200).json(newMedia);
	} catch (error) {
		res.status(500).json({
			error: "Error creating media: " + error.message,
		});
	}
});

// Eliminar un medio por su Serial
mediaController.delete("/:serial", async (req, res) => {
	const { serial } = req.params;
	try {
		const deletedMedia = await deleteMedia(serial);
		if (deletedMedia) {
			res.status(200).json(deletedMedia);
		} else {
			res.status(404).json({ error: "Media not found" });
		}
	} catch (error) {
		res.status(500).json({
			error: "Error deleting media: " + error.message,
		});
	}
});

// Actualizar un medio por su Serial
mediaController.put("/:serial", async (req, res) => {
	const { serial } = req.params;
	const {
		Titulo,
		Sinopsis,
		URL,
		ImagenPortada,
		AnioEstreno,
		GeneroID,
		DirectorID,
		ProductoraID,
		TipoID,
	} = req.body;
	try {
		const updatedMedia = await updateMedia(
			serial,
			Titulo,
			Sinopsis,
			URL,
			ImagenPortada,
			AnioEstreno,
			GeneroID,
			DirectorID,
			ProductoraID,
			TipoID
		);
		if (updatedMedia) {
			res.status(200).json(updatedMedia);
		} else {
			res.status(404).json({ error: "Media not found" });
		}
	} catch (error) {
		res.status(500).json({
			error: "Error updating media: " + error.message,
		});
	}
});

module.exports = mediaController;
