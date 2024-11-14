const Joi = require('joi');

const userSchema = Joi.object({
  name: Joi.string().trim().min(3).max(50).required(),
  email: Joi.string().email().required(),
  password: Joi.string().min(8).required(),
  role: Joi.string().valid('ADMIN', 'SELLER', 'USER').required(),
});

// const userSchema = Joi.array().items(userSchema).required();

module.exports = { userSchema };
