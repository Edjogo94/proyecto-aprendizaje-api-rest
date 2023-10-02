const Joi = require("joi");

// Define un esquema de validación para Director
const directorSchema = Joi.object({
	Nombres: Joi.string().required(),
	Estado: Joi.string().valid("Activo", "Inactivo").required(),
});

// Middleware de validación para POST
const validateDirectorPost = (req, res, next) => {
	const { error } = directorSchema.validate(req.body);
	if (error) {
		res.status(400).json({ error: error.details[0].message });
	} else {
		next();
	}
};

// Middleware de validación para PUT
const validateDirectorPut = (req, res, next) => {
	const { error } = directorSchema.validate(req.body);
	if (error) {
		res.status(400).json({ error: error.details[0].message });
	} else {
		next();
	}
};

module.exports = { validateDirectorPost, validateDirectorPut };
