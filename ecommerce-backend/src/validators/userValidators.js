const Joi = require('joi');

const userSchema = Joi.object({
  name: Joi.string().trim().min(3).max(50).required().messages({
    'string.empty': 'Name cannot be empty',
    'string.min': 'Name should have a minimum length of 3',
    'string.max': 'Name should have a maximum length of 50',
    'any.required': 'Name is required',
  }),

  email: Joi.string().email().required().messages({
    'string.empty': 'Email cannot be empty',
    'string.email': 'Email must be a valid email address',
    'any.required': 'Email is required',
  }),

  password: Joi.string().min(8).required().messages({
    'string.empty': 'Password cannot be empty',
    'string.min': 'Password should have a minimum length of 8',
    'any.required': 'Password is required',
  }),

  role: Joi.string().valid('ADMIN', 'SELLER', 'USER').required().messages({
    'string.empty': 'Role cannot be empty',
    'any.only': 'Role must be one of ADMIN, SELLER, or USER',
    'any.required': 'Role is required',
  }),
});

module.exports = { userSchema };
