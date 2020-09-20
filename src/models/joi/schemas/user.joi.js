const Joi = require('joi');
const { MIN_PASSWORD_LENGTH } = require('../../../util/constants');

const signup = Joi.object({
    firstName: Joi.string().required(),
    lastName: Joi.string(),
    dateOfBirth: Joi.date(),
    email: Joi.string().email().required(),
    username: Joi
        .string()
        .alphanum()
        .min(4)
        .required(),
    password: Joi.string().min(MIN_PASSWORD_LENGTH).required(),
    repeatPassword: Joi.ref('password')
})

const login = Joi.object({
    email: Joi.string().email(),
    password: Joi.string().length(MIN_PASSWORD_LENGTH),
})

module.exports = {
    signup,
    login,
}