const path = require('path');

const express = require('express');
app = express();
port = 3000;


//set
app.set('view', path.join(__dirname, )); //setting views path
app.set('view engine', 'ejs'); //setting view engine to ejs


 //rotas
app.get("/", (request, response, next)=>{
    response.render('index')
})

 //listen
app.listen(
    port,
    ()=> console.log(`Listening on Port ${port}`)
)