const logger = require('morgan');
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const app = express();
const port = 8000;

const database = require('./database/mongoDB');
const itemRouter = require('./routes/item/itemRoutes');
const userRouter = require('./routes/user/userRoutes');

app.use(bodyParser.json());
app.use(logger('tiny'));

database.connect();

app.use('/hello', itemRouter);
app.use('/users', userRouter);

app.get('', (req, res) => {
    res.redirect('hello');
});

app.listen(port, () => {
    console.log('Serevr is running on port ' + port);
});