const Joi = require("joi");

// Define un esquema de validación para Productora
const productoraSchema = Joi.object({
	Nombre: Joi.string().required(),
	Estado: Joi.string().valid("Activo", "Inactivo").required(),
	Slogan: Joi.string().allow("").optional(), 
	Descripcion: Joi.string().allow("").optional(), 
});

// Middleware de validación para POST
const validateProductoraPost = (req, res, next) => {
	const { error } = productoraSchema.validate(req.body);
	if (error) {
		res.status(400).json({ error: error.details[0].message });
	} else {
		next();
	}
};

// Middleware de validación para PUT
const validateProductoraPut = (req, res, next) => {
	const { error } = productoraSchema.validate(req.body);
	if (error) {
		res.status(400).json({ error: error.details[0].message });
	} else {
		next();
	}
};

module.exports = {
	validateProductoraPost,
	validateProductoraPut,
};
