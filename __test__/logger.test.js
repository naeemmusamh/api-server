'use strict';

//middleware for the test all handler function in server.js
const server = require('../src/server.js');

//initialization and setup the app from the package supertest and jest
const superTest = require('supertest');
const serverRequest = superTest(server.app);

//this page for test to use if the name it base in the path of the URL by the query
describe('test the logger page if the query name pass', () => {
    it('test the personal page', async() => {
        let response = await serverRequest.get('/personal?name=naeem');
        expect(response.status).toEqual(200);
        expect(response.body.name).toEqual('naeem');
    });
});