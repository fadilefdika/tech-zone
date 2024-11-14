const Joi = require('joi');

const productSchema = Joi.object({
  name: Joi.string().required(),
  description: Joi.string().optional().allow(''),
  price: Joi.number().positive().required(),
  stock: Joi.number().integer().min(0).required(),
  categoryId: Joi.number().integer().required(),
  sellerId: Joi.number().integer().required(),
});

module.exports = { productSchema };
