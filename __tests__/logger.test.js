'use strict';

//middleware for the server.js
const server = require('../src/server.js');
//supertest package
const superTest = require('supertest');
//require the server.js and the supertest package
const serverRequest = superTest(server.app);

describe('test if the logger page work correctly', () => {

    it('test if the name base for the query name in the path', async() => {
        let response = await serverRequest.get('/personal?name=naeem');
        expect(response.status).toEqual(200);
        expect(response.body.name).toEqual('naeem');
    });

    it('test if the name not base for the query name in the path', async() => {
        let response = await serverRequest.get('/personal');
        expect(response.status).toEqual(500);
    });
});