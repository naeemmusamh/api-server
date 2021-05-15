'use strict';
//create class with constructor and method to make new and update and delete and get
//some data

class dataCollection {
    constructor(data) {
        this.data = data;
    }

    //to get the data collection
    get(id) {
        if (id) {
            return this.data.findById(id);
        } else {
            return this.data.find({});
        }
    }

    //to get all the data collection
    getBy(object) {
        return this.data.find(object);
    };

    //to create new data
    create(object) {
        let newData = new this.data(object);
        return newData.save();
    }

    //to update the data from the collection
    update(id, object) {
        return this.data.findByIdAndUpdate(id, object, { new: true });
    }

    //to delete for data
    delete(id) {
        return this.data.findByIdAndDelete(id);
    }
}

//export for the class to the routes page
module.exports = dataCollection;