'use strict';
//this page will make for use the render and create the database

//middleware for the modles page to base the schema in this page and the class object
//class
const DataCollection = require('../modles/data-collection-class.js');
//schema
const foodModel = require('../modles/food.js');

//route to create new object
const food = new DataCollection(foodModel);

//route for the new food
const infoDatabase = async() => {

    //create first item
    let mansaf = {
        name: 'mansaf',
        price: 25,
        type: 'MEAT'
    }

    //route for create the first item
    let newFood = await food.create(mansaf);
    console.log('the item of food was create ==>', newFood);

    //route for get all the item
    let allFood = await food.get();
    console.log('this is the all item ===>', allFood);

    //route for get one item
    let oneFood = await food.get(newFood.id);
    console.log('this is the one item ===>', oneFood);

    //route for update item
    //update the last item base for the database
    let updateFood = await food.update(newFood.id, {
        name: 'mlokhea',
        price: 10,
        type: 'VEGETARIAN'
    });
    console.log('the new item was update ====>', updateFood);

    //route to get the update item
    let updateLastFood = await food.get(newFood.id);
    console.log('this is the last item was update ====>', updateLastFood);

    let deletedFood = await food.delete(newFood.id);
    console.log('this item was deleted ===>', deletedFood);
}
infoDatabase();