'use strict';
//this page for display error when the path is not exist

module.exports = (request, response, next) => {
    response.status(404).json({
        message: 'there is path is not exist',
        path: request.baseUrl
    });
};