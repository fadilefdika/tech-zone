const Joi = require('joi');

const categorySchema = Joi.object({
  name: Joi.string().trim().min(3).max(50).required().messages({
    'string.empty': 'Category name cannot be empty',
    'string.min': 'Category name should have a minimum length of 3',
    'string.max': 'Category name should have a maximum length of 50',
    'any.required': 'Category name is required',
  }),
});

module.exports = { categorySchema };
