const Joi = require('joi');

const auctionSchema = Joi.object({
  startPrice: Joi.number().positive().required().messages({
    'number.base': 'Start price must be a number',
    'number.positive': 'Start price must be a positive number',
    'any.required': 'Start price is required',
  }),
  currentBid: Joi.number().min(Joi.ref('startPrice')).required().messages({
    'number.base': 'Current bid must be a number',
    'number.min': 'Current bid cannot be lower than the start price',
    'any.required': 'Current bid is required',
  }),
  endDate: Joi.date().greater('now').required().messages({
    'date.base': 'End date must be a valid date',
    'date.greater': 'End date must be in the future',
    'any.required': 'End date is required',
  }),
});

module.exports = { auctionSchema };
