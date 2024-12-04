const Joi = require('joi');

const productSchema = Joi.object({
  name: Joi.string().min(3).max(255).required(),
  description: Joi.string().optional().allow(''),
  price: Joi.number().integer().positive().required(),
  stock: Joi.number().integer().min(0).required(),
  categoryId: Joi.number().integer().required(),
  status: Joi.string().valid('active', 'inactive').optional().default('active'),
});

module.exports = { productSchema };
