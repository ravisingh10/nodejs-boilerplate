const express = require('express');
const { validateBody } = require('../controllers/middlewares/validate-middleware');
const router = express.Router();

const userRoutes = require('./user.route');

router.use('/user', userRoutes);

router.use((err, req, res, next) => {
    return res.status(500).send({ error: err.message || `Internal Server Error` });
})


module.exports = router;