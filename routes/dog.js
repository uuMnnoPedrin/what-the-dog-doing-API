const express = require('express');
const router = express.Router();

const fs = require('fs');

const DogController = require('../controller/dog-controller')

const dt = require('../model/dog-model')

router.get('/', (request, response, next)=>{11
    const DogDoingData = DogController.getData();
    response.render('doglist', DogDoingData)
});

router.post('/', (request, response, next)=>{
    console.log(typeof(request.body))
    DogController.addData(request.body);
});

router.get('/dogdoing', (request, response, next)=>{
    const DogDoingRandom = DogController.getRandom();
    response.render('dogdoing', DogDoingRandom)
});

router.get('/urls', (request, response, next)=>{
    response.render('urls')
});

router.get('/add', (request, response, next)=>{
    response.render('addaction')
});

module.exports = router;