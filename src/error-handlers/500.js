'use strict';
//this page to render for use ERROR if the error for the path of the URL

//middleware and the function for the error 500
module.exports = (error, request, response, next) => {
    response.status(500).json({
        error: error,
        message: `there is error in the path ${error.message}`,
        path: request.path
    });
};