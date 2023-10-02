const Joi = require("joi");

// Define un esquema de validación para GenerosPeliculas
const generosPeliculasSchema = Joi.object({
	Nombre: Joi.string().required(),
	Estado: Joi.string().valid("Activo", "Inactivo").required(),
	Descripcion: Joi.string().allow("").optional(), 
});

// Middleware de validación para POST
const validateGenerosPeliculasPost = (req, res, next) => {
	const { error } = generosPeliculasSchema.validate(req.body);
	if (error) {
		res.status(400).json({ error: error.details[0].message });
	} else {
		next();
	}
};

// Middleware de validación para PUT
const validateGenerosPeliculasPut = (req, res, next) => {
	const { error } = generosPeliculasSchema.validate(req.body);
	if (error) {
		res.status(400).json({ error: error.details[0].message });
	} else {
		next();
	}
};

module.exports = {
	validateGenerosPeliculasPost,
	validateGenerosPeliculasPut,
};
