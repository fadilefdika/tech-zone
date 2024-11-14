const Joi = require('joi');

const orderItemSchema = Joi.object({
  productId: Joi.number().integer().required(),
  quantity: Joi.number().integer().positive().required(),
  price: Joi.number().positive().required(),
});

const createOrderSchema = Joi.object({
  userId: Joi.number().integer().required(),
  items: Joi.array().items(orderItemSchema).required(),
});

module.exports = { createOrderSchema };
