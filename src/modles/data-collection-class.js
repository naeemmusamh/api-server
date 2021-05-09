'use strict';
//this page will make for use the class to create object and this object will base in the database

class DataCollection {
    constructor(model) {
        this.model = model;
    }

    //route for get one item
    get(id) {
        if (id) {
            return this.model.findById(id);
        } else {
            return this.model.find({});
        }
    }

    //route for get all items
    getBy(object) {
        return this.model.find(object);
    }

    //route for create new item
    create(object) {
        let newRecord = new this.model(object);
        return newRecord.save();
    }

    //route for update one item
    update(id, object) {
        return this.model.findByIdAndUpdate(id, object, { new: true });
    }

    //route for delete one item
    delete(id) {
        return this.model.findByIdAndDelete(id);
    }
}

module.exports = DataCollection;