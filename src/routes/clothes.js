'use strict';
//this page will make for use the render and create the database

//mongoose
const mongoose = require('mongoose');

//middleware for the modles page to base the schema in this page and the class object
//class
const DataCollection = require('../modles/data-collection-class.js');
//schema
const clothesModel = require('../modles/clothes.js');

//create URL for the database
const MONGODB_URI = 'mongodb://localhost:127.0.0.1:27017/api-server';

//route for create database
mongoose.connect(MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true,
}).then(() => {
    console.log('iam connect to the mongoose database');
}).catch((error) => {
    console.log(error);
});

//route to create new object
const clothes = new DataCollection(clothesModel);

//route for the new clothes
const infoDatabase = async() => {

    //create first item
    let mansaf = {
        name: 'T-shirt',
        price: 60,
        type: 'ZARA'
    }

    //route for create the first item
    let newClothes = await clothes.create(mansaf);
    console.log('the item of clothes was create ==>', newClothes);

    //route for get all the item
    let allClothes = await clothes.get();
    console.log('this is the all item ===>', allClothes);

    //route for get one item
    let oneClothes = await clothes.get(newClothes.id);
    console.log('this is the one item ===>', oneClothes);

    //route for update item
    //update the last item base for the database
    let updateClothes = await clothes.update(newClothes.id, {
        name: 'mlokhea',
        price: 10,
        type: 'VEGETARIAN'
    });
    console.log('the new item was update ====>', updateClothes);

    //route to get the update item
    let updateLastClothes = await clothes.get(newClothes.id);
    console.log('this is the last item was update ====>', updateLastClothes);

    let deletedClothes = await clothes.delete(newClothes.id);
    console.log('this item was deleted ===>', deletedClothes);
}
infoDatabase();