const mongoose = require('mongoose');

const pizzaSchema = mongoose.Schema({
    name : {
        type : String,
        required : true
    },
    prices : {
        type : Number,
        required : true
    },
    image : {
        type : String,
        required : true
    },
    tag : {
        type : String,
        required : true
    },
    description : {
        type : String,
        required : true
    }
},{timestamps : true});

const pizzaModel = mongoose.model('electronic',pizzaSchema);
module.exports = pizzaModel;