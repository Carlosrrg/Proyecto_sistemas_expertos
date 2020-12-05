var mongoose = require('mongoose');

var servidor = 'localhost:27017';
var db = 'easyCreative';

class Database{
    constructor(){
        //Promesas
        mongoose.connect(`mongodb://${servidor}/${db}`)
        .then(()=>{
            console.log('Se conecto a mongo en la BD easyCreative');
        }).catch((error)=>{
            console.log(error);
        });
    }
}

module.exports = new Database();