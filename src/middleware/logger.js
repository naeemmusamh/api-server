'use strict';

module.exports = (request, response, next) => {
    if (request.query) {
        if (request.query.name) {
            next();
        } else {
            next('there is something wrong in the query name');
        }
    } else {
        next('there is something wrong in the query');
    }
}