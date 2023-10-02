const Joi = require("joi");

// Define un esquema de validación para TipoMultimedia
const tipoMultimediaSchema = Joi.object({
  Nombre: Joi.string().required(),
  Descripcion: Joi.string().allow("").optional(),
});

// Middleware de validación para POST
const validateTipoMultimediaPost = (req, res, next) => {
  const { error } = tipoMultimediaSchema.validate(req.body);
  if (error) {
    res.status(400).json({ error: error.details[0].message });
  } else {
    next();
  }
};

// Middleware de validación para PUT
const validateTipoMultimediaPut = (req, res, next) => {
  const { error } = tipoMultimediaSchema.validate(req.body);
  if (error) {
    res.status(400).json({ error: error.details[0].message });
  } else {
    next();
  }
};

module.exports = {
  validateTipoMultimediaPost,
  validateTipoMultimediaPut,
};
