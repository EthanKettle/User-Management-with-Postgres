const mongoose = require('mongoose');

// schema
const Schema = mongoose.Schema;
const userDataSchema = new Schema({
    id: Number,
    fName: String,
    lName: String,
    email: String,
    age: Number
});

//modles
const useData = mongoose.model('Database', userDataSchema);

module.exports = useData;