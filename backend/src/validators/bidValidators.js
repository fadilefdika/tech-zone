const Joi = require('joi');

const bidSchema = Joi.object({
  bidAmount: Joi.number().positive().required().greater(Joi.ref('currentBid')).messages({
    'number.base': 'Bid amount must be a number',
    'number.positive': 'Bid amount must be positive',
    'number.greater': 'Bid must be greater than the current bid',
    'any.required': 'Bid amount is required',
  }),
});

module.exports = { bidSchema };
