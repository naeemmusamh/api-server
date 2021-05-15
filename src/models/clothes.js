'use strict';
//make schema for the data clothes we will create in the database collection

//initialization the package and setup the app
const mongoose = require('mongoose');

//create schema by type mongoose and noSQL
const clothesSchema = mongoose.Schema({
    name: { type: String, required: true },
    price: { type: Number, required: true },
    type: { type: String, enum: ['ZARA', 'BOSS'] }
});

const clothesModule = mongoose.model('clothes', clothesSchema);

module.exports = clothesModule;