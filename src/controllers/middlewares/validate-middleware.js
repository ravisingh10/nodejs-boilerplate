const schemaValidator = require('../../models/joi/index');

const validateBody = (schema) => {
    return async (req, res, next) => {
        try {
            let { body } = req;
            let response = schemaValidator.validate(schema, body);
            req.body = response;
            next();
        } catch (error) {
            return res.status(400).send(error.details)
        }
    }
}

const validatePath = (schema) => {
    return async (req, res, next) => {
        try {
            let { path } = req;
            let response = schemaValidator.validate(schema, path);
            req.body = response;
            next();
        } catch (error) {
            return res.status(400).error(error.details)
        }
    }
}

const validateQuery = (schema) => {
    return async (req, res, next) => {
        try {
            let { query } = req;
            let response = schemaValidator.validate(schema, query);
            req.body = response;
            next();
        } catch (error) {
            return res.status(400).error(error)
        }
    }
}

module.exports = {
    validateBody,
    validatePath,
    validateQuery
}