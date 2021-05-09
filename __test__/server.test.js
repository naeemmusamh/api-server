'use strict';

//middleware for the test all handler function in server.js
const server = require('../src/server.js');

//initialization and setup the app from the package supertest and jest
// package of supertest
const superTest = require('supertest');
//server.js and run server
const serverRequest = superTest(server.app);
//package of supergoose
require('@code-fellows/supergoose');

//middleware for the modles pag
//class
const Collection = require('../src/modles/data-collection-class.js')
    //schema
const foodModel = require('../src/modles/food.js');

//middleware for the new class
const food = new Collection(foodModel);

//route for the all testing function
describe('test the handler function', () => {

    //test the home page
    it('test the home page handler', async() => {
        let response = await serverRequest.get('/');
        expect(response.status).toEqual(200);
        expect(response.text).toEqual('you in the home page');
    });

    //test the 500.js page
    it('test the 500 page', async() => {
        let response = await serverRequest.get('/bad-path');
        expect(response.status).toEqual(500);
    });

    //test the 404.js page
    it('test the 404 page', async() => {
        let response = await serverRequest.get('/not-found');
        expect(response.status).toEqual(404);
    });
});

describe('test the Router for the handler database', () => {
    it('test the create new item', async() => {
        let object = { name: 'mglwba', price: 10, type: 'MEAT' };
        let response = await food.create(object);
        Object.keys(object).forEach(element => {
            expect(response[element]).toEqual(object[element]);
        });
    });
});