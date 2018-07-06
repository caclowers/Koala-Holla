const express = require('express');
const Koala = require('../models/koala.schema.js');

const router = express.Router();

router.get('/', (req, res) => {
    console.log('got to koala GET');
    Koala.find({}).then((data) => {
        console.log('here is out data', data);
        res.send(data);
    }).catch((err) => {
        console.log('catch error', err);
        res.sendStatus(500);  
    })
    
    //res.sendStatus(200);
});







router.post('/',);

router.put('/:id',);

router.delete('/:id',);


module.exports = router;