const Joi = require('joi');

const contactSchema = Joi.object({
  name: Joi.string().min(3).required(),
  email: Joi.string().email().required(),
  phoneNumber: Joi.string().min(10).max(15).required(),
  address: Joi.string().optional(),
});

module.exports = contactSchema;
