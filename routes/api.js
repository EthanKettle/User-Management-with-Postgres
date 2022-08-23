const express = require('express');

const router = express.Router();

const useData = require('../modles/User')

//routes
router.get('/', (req,res) => {
    // const data = [{
    //     id: 0,
    //     fName: "Adam",
    //     lName: "Adam",
    //     email: "blah@blah",
    //     age: 5
    // }]

    useData.find({  })
        .then(() => {
            console.log('Data: ', data);
            res.json(data)
        })
        .catch((error) => {
            console.log('Error');
        });
    
})

router.post('/name', (req,res) => {
    console.log("First Name: ", req.fName);
    res.json({
        msg: "We recived your data bro!"
    });
})

router.get('/save', (req,res) => {
    const data = {
        id: 0,
        fName: "Bob",
        lName: "Bob",
        email: "blah@blah",
        age: 5
    }
    res.json(data);
})

module.exports = router;