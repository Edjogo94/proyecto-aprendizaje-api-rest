const express = require("express");
const genreController = express.Router();
const {
  getAllGenres,
  getGenreById,
  createGenre,
  deleteGenre,
  updateGenre,
} = require("../queries/generosQueries");

// Obtener todos los géneros
genreController.get("/", async (req, res) => {
  try {
    const genres = await getAllGenres();
    res.status(200).json(genres);
  } catch (error) {
    res.status(500).json({ error: "Error fetching genres: " + error.message });
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
    res.status(500).json({ error: "Error fetching genre: " + error.message });
  }
});

// Crear un nuevo género
genreController.post("/", async (req, res) => {
  const { Nombre, Estado, Descripcion } = req.body;
  try {
    const newGenre = await createGenre(Nombre, Estado, Descripcion);
    res.status(200).json(newGenre);
  } catch (error) {
    res.status(500).json({ error: "Error creating genre: " + error.message });
  }
});

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
    res.status(500).json({ error: "Error deleting genre: " + error.message });
  }
});

// Actualizar un género por su ID
genreController.put("/:id", async (req, res) => {
  const { id } = req.params;
  const { Nombre, Estado, Descripcion } = req.body;
  try {
    const updatedGenre = await updateGenre(id, Nombre, Estado, Descripcion);
    if (updatedGenre) {
      res.status(200).json(updatedGenre);
    } else {
      res.status(404).json({ error: "Genre not found" });
    }
  } catch (error) {
    res.status(500).json({ error: "Error updating genre: " + error.message });
  }
});

module.exports = genreController;
