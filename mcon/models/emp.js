const mongoose = require('mongoose');

const empSchema = new mongoose.Schema({
    id :{
        type:Number,
        required:true,
        unique:true
    },
    name:{
        type:String,
        required:true
    }
});

const Emp= mongoose.model('Emp', empSchema); // table would be created with name Emp


module.exports =Emp;