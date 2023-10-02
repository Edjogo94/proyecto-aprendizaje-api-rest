const db = require("../db/dbConfig.js");

// Obtener todas las productoras
async function getAllProductoras() {
	try {
		const query = "SELECT * FROM Productora";
		const result = await db.manyOrNone(query);
		return result;
	} catch (error) {
		throw error;
	}
}

// Obtener una productora por su ID
async function getProductoraById(id) {
	try {
		const query = "SELECT * FROM Productora WHERE ID = $1";
		const result = await db.oneOrNone(query, id);
		return result;
	} catch (error) {
		throw error;
	}
}

// Crear una nueva productora
async function createProductora(Nombre, Estado, Slogan, Descripcion) {
	try {
		const query =
			"INSERT INTO Productora (Nombre, Estado, Slogan, Descripcion) VALUES ($1, $2, $3, $4) RETURNING *";
		const result = await db.one(query, [
			Nombre,
			Estado,
			Slogan,
			Descripcion,
		]);
		return result;
	} catch (error) {
		throw error;
	}
}

// Eliminar una productora por su ID
async function deleteProductora(id) {
	try {
		const query = "DELETE FROM Productora WHERE ID = $1 RETURNING *";
		const result = await db.oneOrNone(query, id);
		return result;
	} catch (error) {
		throw error;
	}
}

// Actualizar una productora por su ID
async function updateProductora(id, Nombre, Estado, Slogan, Descripcion) {
	try {
		const query =
			"UPDATE Productora SET Nombre = $1, Estado = $2, Slogan = $3, Descripcion = $4 WHERE ID = $5 RETURNING *";
		const result = await db.oneOrNone(query, [
			Nombre,
			Estado,
			Slogan,
			Descripcion,
			id,
		]);
		return result;
	} catch (error) {
		throw error;
	}
}

module.exports = {
	getAllProductoras,
	getProductoraById,
	createProductora,
	deleteProductora,
	updateProductora,
};
