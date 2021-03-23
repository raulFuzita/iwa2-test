const mongoose = require('mongoose');

const dbURI = "mongodb://localhost/test";

const connect = () => {
    mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
        .then((result) => console.log('connected to db'))
        .catch((err) => console.log(err));
};

module.exports = {
    connect
};