var mongoose = require('mongoose');
var User = require('./user')
var News = require('./news')

DATABASE_URL = "mongodb://localhost:27017/spool"

mongoose.connect(DATABASE_URL, {
        useNewUrlParser: true,
        useCreateIndex: true,
        useFindAndModify: false,
        useUnifiedTopology: true
    })
    .then(() => console.log('DB connnection successful!'))
    .catch(err => {
        console.error.bind(console, 'MongoDB connection error:')
    });