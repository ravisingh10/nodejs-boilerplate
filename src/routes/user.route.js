const express = require('express');
const router = express.Router();

const schemas = require('./../models/joi/schemas');
const { validateBody } = require('../controllers/middlewares/validate-middleware');


const userController = require('./../controllers/user.controller');

router.post('/',
    validateBody(schemas.user.signup),
    (req, res, next) => userController.create(req, res, next),
)

module.exports = router;