import Joi from 'joi';

export const createContactSchema = Joi.object({
  name: Joi.string().min(3).max(20).required().messages({
    'string.base': 'Username should be a string',
    'string.min': 'Username should have at least {#limit} characters',
    'string.max': 'Username should have at most {#limit} characters',
    'any.required': 'Username is required',
  }),
  phoneNumber: Joi.string().min(3).max(20).required(),
  contactType: Joi.string().valid('work', 'home', 'personal').required(),
  email: Joi.string().min(3).max(30).required().messages({
    'string.base': 'Email must be a string!',
    'string.min': 'Minimum number of characters in email is 3',
    'string.max': 'The maximum number of characters in an email is 20!',
    'any.required': 'Email is required!',
  }),
  isFavourite: Joi.boolean(),
});

export const updateContactSchema = Joi.object({
  userId: Joi.string().length(24),
  name: Joi.string().min(3).max(20).messages({
    'string.base': 'Username should be a string',
    'string.min': 'Username should have at least {#limit} characters',
    'string.max': 'Username should have at most {#limit} characters',
    'any.required': 'Username is required',
  }),
  phoneNumber: Joi.string().min(3).max(20),
  contactType: Joi.string().valid('work', 'home', 'personal'),
  email: Joi.string().min(3).max(30).messages({
    'string.base': 'Email must be a string!',
    'string.min': 'Minimum number of characters in email is 3!',
    'string.max': 'The maximum number of characters in an email is 20!',
  }),
  isFavourite: Joi.boolean(),
});
