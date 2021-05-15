'use strict';
//this page for test if the all the route and the app and functionally for correctly

//middleware for the server.js
const server = require('../src/server.js');
//supertest package
const superTest = require('supertest');
//require the server.js and the supertest package
const serverRequest = superTest(server.app);

describe('test the server.js if the router work', () => {
    it('test if the home page work correctly', async() => {
        let response = await serverRequest.get('/');
        expect(response.status).toEqual(200);
        expect(response.text).toEqual('welcome to the home page');
    });

    it('test if the error path no exist work correctly', async() => {
        let response = await serverRequest.get('/not-found');
        expect(response.status).toEqual(404);
    });

    it('test if the error on the path and 500 page work correctly', async() => {
        let response = await serverRequest.get('/wrong-path');
        expect(response.status).toEqual(500);
    })
});