const Joi = require("joi");

// Define un esquema de validación para Media
const mediaSchema = Joi.object({
	Titulo: Joi.string().required(),
	Sinopsis: Joi.string().allow("").optional(),
	URL: Joi.string().uri().required(), // URL válida requerida
	ImagenPortada: Joi.string().allow("").optional(),
	AnioEstreno: Joi.number().integer().min(1900).required(),
	GeneroID: Joi.number().integer().min(1).required(),
	DirectorID: Joi.number().integer().min(1).required(),
	ProductoraID: Joi.number().integer().min(1).required(),
	TipoID: Joi.number().integer().min(1).required(),
});

// Middleware de validación para POST
const validateMediaPost = (req, res, next) => {
	const { error } = mediaSchema.validate(req.body);
	if (error) {
		res.status(400).json({ error: error.details[0].message });
	} else {
		next();
	}
};

// Middleware de validación para PUT
const validateMediaPut = (req, res, next) => {
	const { error } = mediaSchema.validate(req.body);
	if (error) {
		res.status(400).json({ error: error.details[0].message });
	} else {
		next();
	}
};

module.exports = {
	validateMediaPost,
	validateMediaPut,
};
