const express = require('express');
const mongoose = require('mongoose');
const morgan = require('morgan');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 8080;

//database
const MONGODB_URI = 'mongodb+srv://kettle-data:database@cluster0.okeisuj.mongodb.net/?retryWrites=true&w=majority';

mongoose.connect(MONGODB_URI || 'mongodb://localhost/mon_Management',{
    useNewUrlParser: true,
    useUnifiedTopology: true

});

mongoose.connection.on('connected', () => {
    console.log('Mongoose connected');
})

const Schema = mongoose.Schema;
const newSchema = new Schema({
    title: String,
    body: String,
    data: {
        type: String,
        default: Data.now()
    }

});

const newModle = mongoose.model('Database', newSchema)

app.use(morgan('tiny'));

app.get('/api', (req,res) => {
    const data = {
        username: "Adam",
        age: 5
    }
    res.json(data)
})

app.get('/api/name', (req,res) => {
    const data = {
        username: "Bob",
        age: 5
    }
    res.json(data)
})

app.listen(PORT);