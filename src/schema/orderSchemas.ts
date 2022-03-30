import Joi from 'joi';

const create = Joi.object({
  products: Joi.array().required().min(1).items(Joi.number())
    .messages({
      'any.required': '400|Products is required',
      'array.min': '422|Products can\'t be empty',
      'array.base': '422|Products must be an array of numbers',
    }),
});

export default {
  create,
};
