'use strict';
//this page to render for use Error if the error from the path is not exist

//middleware and the function for the 404 error
module.exports = (request, response, next) => {
    response.status(404).json({
        message: message,
        path: request.baseUrl
    });
};