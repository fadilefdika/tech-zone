const Joi = require('joi');

const profileSchema = Joi.object({
  userId: Joi.number().integer().required().messages({
    'number.base': 'User ID must be a number',
    'number.integer': 'User ID must be an integer',
    'any.required': 'User ID is required',
  }),
  address: Joi.string().max(100).optional().allow(null).messages({
    'string.base': 'Address must be a string',
    'string.max': 'Address should not exceed 100 characters',
  }),
  phone: Joi.string()
    .pattern(/^[0-9]{10,15}$/)
    .optional()
    .allow(null)
    .messages({
      'string.pattern.base': 'Phone number must be between 10 and 15 digits',
    }),
});

module.exports = { profileSchema };
