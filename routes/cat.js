const axios = require('axios')

const express = require('express');
const router = express.Router();

router.get('/', (request, response, next)=>{
    cat = axios.get(`https://api.thecatapi.com/v1/images/search`).then(dt =>{
        response.render('catdoing', {url: `${dt.data[0].url}`})
    })
})

module.exports = router;