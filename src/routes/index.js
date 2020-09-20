const express = require('express');
const schemas = require('./../models/joi/schemas');
const { validateBody } = require('../controllers/middlewares/validate-middleware');
const router = express.Router();

const userController = require('./../controllers/user.controller');

router.post('/',
    validateBody(schemas.user.signup),
    (req, res, next) => userController.create(req, res, next),
)

router.use((err, req, res, next) => {
    return res.status(500).send({ error: err.message || `Internal Server Error` });
})


module.exports = router;