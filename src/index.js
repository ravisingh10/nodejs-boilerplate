require('dotenv').config();
const express = require('express');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');


const db = require('./database')
const models = require('./models');
const routes = require('./routes');
const { sessionMiddleware } = require('./controllers/middlewares/auth-middlewares');

const app = express();
const PORT = process.env.PORT;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json({}));
app.use(cookieParser());

app.use('/api', sessionMiddleware, routes);


app.listen(PORT, () => {
    console.log(`Listening at`, PORT);
})
