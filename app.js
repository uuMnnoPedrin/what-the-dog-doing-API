const path = require('path');

const express = require('express');
app = express();
port = 3000;

//import routes
const dog = require('./routes/dog')

//set
app.set('views', path.join(__dirname, 'view')); //setting views path
app.set('view engine', 'ejs'); //setting view engine to ejs

app.use(express.static(path.join(__dirname, 'public'))); //setting static files dir

 //rotas
app.get("/", (request, response, next)=>{ //index
    response.render('index')
});

app.use("/v1/dog", dog);

 //listen
app.listen(
    port,
    ()=> console.log(`Listening on Port ${port}`)
);