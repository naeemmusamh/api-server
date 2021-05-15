'use strict';
//this page to make error if the path is not correctly

module.exports = (error, request, response, next) => {
    response.status(500).json({
        error: error,
        message: `there is error in the path ${error.message}`,
        path: request.path,
    });
};