const express = require('express');
const router = express.Router();

const DogController = require('../controller/dog-controller')


router.get('/', (request, response, next)=>{
    const DogDoingData = DogController.getData();
    response.render('doglist', DogDoingData)
});


router.get('/dogdoing', (request, response, next)=>{
    const DogDoingRandom = DogController.getRandom();
    response.render('dogdoing', DogDoingRandom)
});

module.exports = router;