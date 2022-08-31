const express = require('express');

const router = express.Router();

const useData = require('../modles/User')

//routes
router.get('/', (req,res) => {


    useData.find({  })
        .then((data) => {
            console.log('Data: ', data);
            res.json(data)
        })
        .catch((error) => {
            console.log('Error');
        });
    
})

router.post('/save', (req,res) => {
    console.log(req.body);
    const data = req.body;
    const newData = new useData(data);

    newData.save((error) => {
        if (error) {
            res.status(500).json({msg: "oops we messed up sad face"});
            return;
        } 
        return res.json({
            msg: "We recived your data bro!"
        });
    })
})

// router.get('/name', (req,res) => {
//     const data = {
//         id: 0,
//         fName: "Bob",
//         lName: "Bob",
//         email: "blah@blah",
//         age: 5
//     }
//     res.json(data);
// })

module.exports = router;