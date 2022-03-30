import Joi from 'joi';

const login = Joi.object({
  username: Joi.string().required()
    .messages({
      'any.required': '400|Username is required',
    }),
  password: Joi.string().required()
    .messages({
      'any.required': '400|Password is required',
    }),
});

export default {
  login,
};
