'use strict';
//make schema for the data food we will create in the database collection

//initialization the package and setup the app
const mongoose = require('mongoose');

//create schema by type mongoose and noSQL
const foodSchema = mongoose.Schema({
    name: { type: String, required: true },
    price: { type: Number, required: true },
    type: { type: String, enum: ['meat', 'vega'] }
});

const foodModule = mongoose.model('food', foodSchema);

module.exports = foodModule;