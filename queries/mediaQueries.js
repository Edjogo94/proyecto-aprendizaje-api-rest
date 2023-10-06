const db = require("../db/dbConfig.js");

// Obtener todos los medios
async function getAllMedia() {
	try {
		const query = "SELECT * FROM Media";
		const result = await db.manyOrNone(query);
		return result;
	} catch (error) {
		throw error;
	}
}

// Obtener un medio por su Serial
async function getMediaById(serial) {
	try {
		const query = "SELECT * FROM Media WHERE ID = $1";
		const result = await db.oneOrNone(query, serial);
		return result;
	} catch (error) {
		throw error;
	}
}

// Crear un nuevo medio
async function createMedia(
	Titulo,
	Sinopsis,
	URL,
	ImagenPortada,
	AnioEstreno,
	GeneroID,
	DirectorID,
	ProductoraID,
	TipoID
) {
	try {
		const query = `
      INSERT INTO Media (Titulo, Sinopsis, URL, ImagenPortada, AnioEstreno, GeneroID, DirectorID, ProductoraID, TipoID) 
      VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9) 
      RETURNING *`;
		const result = await db.one(query, [
			Titulo,
			Sinopsis,
			URL,
			ImagenPortada,
			AnioEstreno,
			GeneroID,
			DirectorID,
			ProductoraID,
			TipoID,
		]);
		return result;
	} catch (error) {
		throw error;
	}
}

// Eliminar un medio por su Serial
async function deleteMedia(serial) {
	try {
		const query = "DELETE FROM Media WHERE ID = $1 RETURNING *";
		const result = await db.oneOrNone(query, serial);
		return result;
	} catch (error) {
		throw error;
	}
}

// Actualizar un medio por su Serial
async function updateMedia(
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
) {
	try {
		const query = `
      UPDATE Media 
      SET 
        Titulo = $1,
        Sinopsis = $2,
        URL = $3,
        ImagenPortada = $4,
        AnioEstreno = $5,
        GeneroID = $6,
        DirectorID = $7,
        ProductoraID = $8,
        TipoID = $9
      WHERE ID = $10
      RETURNING *`;
		const result = await db.oneOrNone(query, [
			Titulo,
			Sinopsis,
			URL,
			ImagenPortada,
			AnioEstreno,
			GeneroID,
			DirectorID,
			ProductoraID,
			TipoID,
			serial,
		]);
		return result;
	} catch (error) {
		throw error;
	}
}

module.exports = {
	getAllMedia,
	getMediaById,
	createMedia,
	deleteMedia,
	updateMedia,
};
