const db = require("../db/dbConfig.js");

// Obtener todos los directores
async function getAllDirectors() {
  try {
    const query = "SELECT * FROM Director";
    const result = await db.manyOrNone(query);
    return result;
  } catch (error) {
    throw error;
  }
}

// Obtener un director por su ID
async function getDirectorById(id) {
  try {
    const query = "SELECT * FROM Director WHERE ID = $1";
    const result = await db.oneOrNone(query, id);
    return result;
  } catch (error) {
    throw error;
  }
}

// Crear un nuevo director
async function createDirector(Nombres, Estado) {
  try {
    const query =
      "INSERT INTO Director (Nombre, Estado) VALUES ($1, $2) RETURNING *";
    const result = await db.one(query, [Nombres, Estado]);
    return result;
  } catch (error) {
    throw error;
  }
}

// Eliminar un director por su ID
async function deleteDirector(id) {
  try {
    const query = "DELETE FROM Director WHERE ID = $1 RETURNING *";
    const result = await db.oneOrNone(query, id);
    return result;
  } catch (error) {
    throw error;
  }
}

// Actualizar un director por su ID
async function updateDirector(id, Nombres, Estado) {
  try {
    const query =
      "UPDATE Director SET Nombre = $1, Estado = $2 WHERE ID = $3 RETURNING *";
    const result = await db.oneOrNone(query, [Nombres, Estado, id]);
    return result;
  } catch (error) {
    throw error;
  }
}

module.exports = {
  getAllDirectors,
  getDirectorById,
  createDirector,
  deleteDirector,
  updateDirector,
};
