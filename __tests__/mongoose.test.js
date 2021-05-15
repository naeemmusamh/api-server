'use strict';
//this page for test if the route page for the mongoose is work correctly

//initialization and setup the package for test the app and routes
//code fellows package
require('@code-fellows/supergoose');
//middleware for the class constrictor
const dataCollection = require('../src/models/data-collection-class.js');
//middleware for the food routers
const foodModule = require('../src/models/food.js');
//middleware for the clothes routers
const clothesModule = require('../src/models/clothes.js');
//route for make new food data collection
const Food = new dataCollection(foodModule);
//route for make new clothes data collection
const Clothes = new dataCollection(clothesModule);

describe('test if the module routes for the class and routers work correctly', () => {
    it('test if the create new food work correctly', async() => {
        let object = {
            name: 'tomato',
            price: 5,
            type: 'vega'
        };
        let newData = await Food.create(object);
        Object.keys(object).forEach(key => {
            expect(newData[key]).toEqual(object[key]);
        });
    });

    it('test if the get all the food work correctly', async() => {
        let food = await food.get();
        expect(food[0].name).toEqual('tomato');
    });

    it('test if the get one food work correctly', async() => {
        let food = await food.get();
        let id = food[0].id;
        let foods = await Food.get(id);
        expect(foods.name).toEqual('tomato');
    });

    it('test if the update food work correctly', async() => {
        let food = await Food.get();
        let id = food[0].id;
        let object = {
            name: 'khear',
            price: 2,
            type: 'vega',
        };
        let foods = await Food.update(id, object);
        expect(foods.name).toEqual('khear');
    });

    it('test if the delete food work correctly', async() => {
        let food = await Food.get();
        let id = food[0].id;
        let foods = await Food.delete(id);
        let deletedFood = await Food.get(id);
        expect(foods.name).toEqual('khear');
        expect(deletedFood).toEqual(null);
    });
});