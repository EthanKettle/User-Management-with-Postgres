const express = require('express');
const mongoose = require('mongoose');
const morgan = require('morgan');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 8080;

const routes = require('./routes/api')

//database
// const MONGODB_URI = 'mongodb+srv://kettle-data:database@cluster0.okeisuj.mongodb.net/?retryWrites=true&w=majority';

mongoose.connect('mongodb://localhost/mon_Management',{
    useNewUrlParser: true,
    useUnifiedTopology: true

});

mongoose.connection.on('connected', () => {
    console.log('Mongoose connected');
})

app.use(morgan('tiny'));
app.use('/api', routes);

app.listen(PORT);