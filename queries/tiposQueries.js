const db = require("../db/dbConfig.js");

// Obtener todos los tipos de multimedia
async function getAllTipoMultimedia() {
	try {
		const query = "SELECT * FROM TipoMultimedia";
		const result = await db.manyOrNone(query);
		return result;
	} catch (error) {
		throw error;
	}
}

// Obtener un tipo de multimedia por su ID
async function getTipoMultimediaById(id) {
	try {
		const query = "SELECT * FROM TipoMultimedia WHERE ID = $1";
		const result = await db.oneOrNone(query, id);
		return result;
	} catch (error) {
		throw error;
	}
}

// Crear un nuevo tipo de multimedia
async function createTipoMultimedia(Nombre, Descripcion) {
	try {
		const query =
			"INSERT INTO TipoMultimedia (Nombre, Descripcion) VALUES ($1, $2) RETURNING *";
		const result = await db.one(query, [Nombre, Descripcion]);
		return result;
	} catch (error) {
		throw error;
	}
}

// Eliminar un tipo de multimedia por su ID
async function deleteTipoMultimedia(id) {
	try {
		const query = "DELETE FROM TipoMultimedia WHERE ID = $1 RETURNING *";
		const result = await db.oneOrNone(query, id);
		return result;
	} catch (error) {
		throw error;
	}
}

// Actualizar un tipo de multimedia por su ID
async function updateTipoMultimedia(id, Nombre, Descripcion) {
	try {
		const query =
			"UPDATE TipoMultimedia SET Nombre = $1, Descripcion = $2 WHERE ID = $3 RETURNING *";
		const result = await db.oneOrNone(query, [Nombre, Descripcion, id]);
		return result;
	} catch (error) {
		throw error;
	}
}

module.exports = {
	getAllTipoMultimedia,
	getTipoMultimediaById,
	createTipoMultimedia,
	deleteTipoMultimedia,
	updateTipoMultimedia,
};
