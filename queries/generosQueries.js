const db = require("../db/dbConfig.js");

// Obtener todos los géneros
async function getAllGenres() {
  try {
    const query = "SELECT * FROM GenerosPeliculas";
    const result = await db.manyOrNone(query);
    return result;
  } catch (error) {
    throw error;
  }
}

// Obtener un género por su ID
async function getGenreById(id) {
  try {
    const query = "SELECT * FROM GenerosPeliculas WHERE ID = $1";
    const result = await db.oneOrNone(query, id);
    return result;
  } catch (error) {
    throw error;
  }
}

// Crear un nuevo género
async function createGenre(Nombre, Estado, Descripcion) {
  try {
    const query =
      "INSERT INTO GenerosPeliculas (Nombre, Estado, Descripcion) VALUES ($1, $2, $3) RETURNING *";
    const result = await db.one(query, [Nombre, Estado, Descripcion]);
    return result;
  } catch (error) {
    throw error;
  }
}

// Eliminar un género por su ID
async function deleteGenre(id) {
  try {
    const query = "DELETE FROM GenerosPeliculas WHERE ID = $1 RETURNING *";
    const result = await db.oneOrNone(query, id);
    return result;
  } catch (error) {
    throw error;
  }
}

// Actualizar un género por su ID
async function updateGenre(id, Nombre, Estado, Descripcion) {
  try {
    const query =
      "UPDATE GenerosPeliculas SET Nombre = $1, Estado = $2, Descripcion = $3 WHERE ID = $4 RETURNING *";
    const result = await db.oneOrNone(query, [Nombre, Estado, Descripcion, id]);
    return result;
  } catch (error) {
    throw error;
  }
}

module.exports = {
  getAllGenres,
  getGenreById,
  createGenre,
  deleteGenre,
  updateGenre,
};
