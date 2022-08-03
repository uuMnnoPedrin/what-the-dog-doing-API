const { whatthedogdoing } = require('../model/dog-model');
const DogModel = require('../model/dog-model');

exports.getData = ()=>{
    return DogModel

}

exports.getRandom = ()=>{
    var maxlen = Object.keys(whatthedogdoing).length;
    random = Math.floor(Math.random() * maxlen)
    return DogModel.whatthedogdoing[random]
}

