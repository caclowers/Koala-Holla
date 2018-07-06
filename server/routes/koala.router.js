const express = require('express');
const Koala = require('../models/koala.schema.js');

const router = express.Router();

router.get('/', (req, res) => {
    console.log('line 7 got to koala GET');
    Koala.find({}).then((data) => {
        console.log('line 9 here is out data', data);
        res.send(data);
    }).catch((err) => {
        console.log('line 12 catch error', err);
        res.sendStatus(500);  
    });
});


router.post('/', (req, res) => {
    console.log('line 18 got to /koala POST');
    console.log('line 19 koala POST req.body is:', req.body);
    
    let newKoala = new Koala(req.body);

    newKoala.save().then((data) => {
        console.log('line 24 POST data from Mongoose:', data);
        res.sendStatus(201);
    }).catch((err) => {
        console.log('line 27 koala POST failed. Error:', err);
        res.sendStatus(500);
    });
});


router.put('/:id',);

router.delete('/:id', (req, res) => {
    console.log('line 37 here is the req.body from frontend:', req.body);
    Koala.findByIdAndRemove({
        _id : req.params.id;
    }).then((data) => {
        console.log('line 41 data returned from Mongo:', data);
        res.sendStatus(202);
    }).catch((err) => {
        console.log('line 44 koala delete request failed. Error:', err);
        res.sendStatus(500);   
    });
});


module.exports = router;