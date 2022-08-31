const express = require('express');
const mongoose = require('mongoose');
const morgan = require('morgan');
const path = require('path');
const cors = require('cors');

const MONGODB_URL='mongodb+srv://kettle-data:sU2eHiPKzBekk5nv@cluster0.okeisuj.mongodb.net/test'

const app = express();
const PORT = process.env.PORT || 8080;

const routes = require('./routes/api')

mongoose.connect(MONGODB_URL || 'mongodb://localhost/mon_Management',{
    useNewUrlParser: true,
    useUnifiedTopology: true

});

mongoose.connection.on('connected', () => {
    console.log('Mongoose connected');
})

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(cors());

app.use(morgan('tiny'));
app.use('/api', routes);

app.listen(PORT);