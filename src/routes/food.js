'use strict';

const mongoose = require('mongoose');

const foodCollection = require('../models/data-collection-class.js');

const foodModule = require('../models/food.js');

const Food = new foodCollection(foodModule);

const foodData = async() => {
    let foodNew = {
        name: 'mshmsh',
        price: 5,
        type: 'vega'
    }

    //route to create new food
    let newFood = await Food.create(foodNew);
    console.log('the new food create', newFood);

    //route to get all the data collection
    let allFood = await Food.get();
    console.log('to get all the food collection', allFood);

    //route to get one food collection
    let oneFood = await Food.get(newFood.id);
    console.log('to get one food collection', oneFood);

    //route to create new food and update it
    let updateFood = await Food.update(newFood.id, {
        name: 'peg',
        price: 25,
        type: 'meat'
    });
    console.log('create new food and update', updateFood);

    //rote to get the update food collection
    let getFoodUpdate = await Food.get(newFood.id);
    console.log('to get the update food', getFoodUpdate);

    mongoose.disconnect();
}

foodData();