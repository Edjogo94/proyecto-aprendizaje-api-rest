const express = require("express");
const productoraController = express.Router();
const {
	getAllProductoras,
	getProductoraById,
	createProductora,
	deleteProductora,
	updateProductora,
} = require("../queries/productoresQueries");
const {
	validateProductoraPost,
	validateProductoraPut,
} = require("../validations/productoresValidations");

// Obtener todas las productoras
productoraController.get("/", async (req, res) => {
	try {
		const productoras = await getAllProductoras();
		res.status(200).json(productoras);
	} catch (error) {
		res.status(500).json({
			error: "Error fetching productoras: " + error.message,
		});
	}
});

// Obtener una productora por su ID
productoraController.get("/:id", async (req, res) => {
	const { id } = req.params;
	try {
		const productora = await getProductoraById(id);
		if (productora) {
			res.status(200).json(productora);
		} else {
			res.status(404).json({ error: "Productora not found" });
		}
	} catch (error) {
		res.status(500).json({
			error: "Error fetching productora: " + error.message,
		});
	}
});

// Crear una nueva productora
productoraController.post("/", validateProductoraPost, async (req, res) => {
	const { Nombre, Estado, Slogan, Descripcion } = req.body;
	try {
		const newProductora = await createProductora(
			Nombre,
			Estado,
			Slogan,
			Descripcion
		);
		res.status(200).json(newProductora);
	} catch (error) {
		res.status(500).json({
			error: "Error creating productora: " + error.message,
		});
	}
});

// Eliminar una productora por su ID
productoraController.delete("/:id", async (req, res) => {
	const { id } = req.params;
	try {
		const deletedProductora = await deleteProductora(id);
		if (deletedProductora) {
			res.status(200).json(deletedProductora);
		} else {
			res.status(404).json({ error: "Productora not found" });
		}
	} catch (error) {
		res.status(500).json({
			error: "Error deleting productora: " + error.message,
		});
	}
});

// Actualizar una productora por su ID
productoraController.put("/:id", validateProductoraPut, async (req, res) => {
	const { id } = req.params;
	const { Nombre, Estado, Slogan, Descripcion } = req.body;
	try {
		const updatedProductora = await updateProductora(
			id,
			Nombre,
			Estado,
			Slogan,
			Descripcion
		);
		if (updatedProductora) {
			res.status(200).json(updatedProductora);
		} else {
			res.status(404).json({ error: "Productora not found" });
		}
	} catch (error) {
		res.status(500).json({
			error: "Error updating productora: " + error.message,
		});
	}
});
module.exports = productoraController;
