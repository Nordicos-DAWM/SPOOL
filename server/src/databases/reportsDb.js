var mongoose = require('mongoose');
const config = require('config');

DATABASE_URL = config.get('dbConfig.mongodb.url')

mongoose.connect(DATABASE_URL, {
        useNewUrlParser: true,
        useCreateIndex: true,
        useFindAndModify: false,
        useUnifiedTopology: true
    })
    .then(() => console.log('MongoDB connnection successful'))
    .catch(err => {
        console.error.bind(console, 'MongoDB connection error:')
    });

