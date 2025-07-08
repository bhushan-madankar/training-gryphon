const mongoose = require('mongoose');

const itemSchema = new mongoose.Schema({
    id :{
        type:Number,
        required:true,
        unique:true
    },
    name:{
        type:String,
        required:true
    },
    quantity:{
        type:Number,
        required:true
    },
    rate:{
        type: Number,
        required: true
    }
});

const item= mongoose.model('item', itemSchema); // table would be created with name Emp


module.exports = item;