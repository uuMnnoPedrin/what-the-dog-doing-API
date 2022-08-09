const fs = require('fs')

const { whatthedogdoing } = require('../model/dog-model');
const data = require('../model/dog-model.json');

DogModel = data

exports.getData = ()=>{
    return DogModel
}

exports.getRandom = ()=>{
    var maxlen = Object.keys(whatthedogdoing).length
    random = Math.floor(Math.random() * maxlen)
    return DogModel.whatthedogdoing[random]
}

exports.addData = (action)=>{
    console.log("chegou");
    console.log(action)
    dt = fs.readFileSync('model/dog-model.json');
    var dtObj = JSON.parse(dt);
    dtObj.whatthedogdoing.push(action);
    dtObj = JSON.stringify(dtObj);
    fs.writeFile('model/dog-model.json', dtObj, err =>{
        //error
        if(err) throw err;
        console.log("data adicionada");
    })
}