'use strict';
//this page for add for the path query name

//middleware for the function and query name
module.exports = (request, response, next) => {
    if (request.query) {
        if (request.query.name) {
            next();
        } else {
            next('there is error in the name query');
        }
    } else {
        next('there is error in the query');
    }
}