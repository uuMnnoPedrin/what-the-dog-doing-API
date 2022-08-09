const axios = require('axios')

const button = document.querySelector('#submit');
const input = document.querySelector('#dogdoing')

button.addEventListener('click', ()=>{
    dogdoingvalue = input.value;
    axios.post('/v1/dog/',{
        dogdoing: `${dogdoingvalue}`
    })
})