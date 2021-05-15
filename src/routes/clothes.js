'use strict';

const mongoose = require('mongoose');

const clothesCollection = require('../models/data-collection-class.js');

const foodModule = require('../models/clothes.js');

const Clothes = new clothesCollection(foodModule);

const clothesData = async() => {
    let clothesNew = {
        name: 'T-shirt',
        price: 15,
        type: 'BOSS'
    }

    //route to create new clothes
    let newClothes = await Clothes.create(clothesNew);
    console.log('to create new clothes', newClothes);

    //route to get all the data collection
    let allClothes = await Clothes.get();
    console.log('to get all the clothes collection', allClothes);

    //route to get one food collection
    let oneClothes = await Clothes.get(newClothes.id);
    console.log('to get one clothes collection', oneClothes);

    //route to create new food and update it
    let updateClothes = await Clothes.update(newClothes.id, {
        name: 'sweeter',
        price: 35,
        type: 'ZARA'
    });
    console.log('create new food and update', updateClothes);

    //rote to get the update food collection
    let getClothesUpdate = await Clothes.get(newClothes.id);
    console.log('to get the update food', getClothesUpdate);

    mongoose.disconnect();
}

clothesData();