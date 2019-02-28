let data = [];
var crudActions = {

    loadData: function (externalData) {
        data = externalData;
    },

    getAll: function () {
        return data;
    },

    getdById: function (id) {
        let found = data.find(item => item.id == id);
        if (found) {
            return found;
        } else {
            return undefined;
        }
    },

    addRow: function (item) {
        // find the highest ID associated with each element of the collection
        const highestId = Math.max.apply(Math, data.map(function (element) {
            return element.id;
        }));
        let newId = 1; // default incase the array is empty

        if (highestId > 0) {
            // generate a new ID based off of the highest existing element ID 
            newId = (highestId + 1);
        }
        // make a new object of updated object.   
        let newItem = {
            ...item,
            id: newId,
            author: item.author,
            text: item.text
        };

        // insert the new item
        data.push(newItem);
        //console.log('New Element is: ', newItem);
        return newId;
    },

    updateRow: function (item) {
        const collectionCount = data.length;
        if (collectionCount > 0) {
            //find the index of object from array that you want to update
            const currentIndex = data.findIndex(element => element.id === item.id);

            //Log object to Console.
            //console.log("Before update: ", data[currentIndex])

            // make new object of updated object.   
            let updatedItem = {
                ...data[currentIndex],
                author: item.author,
                text: item.text
            };

            // update the array elemnent with the new data
            return data[currentIndex] = updatedItem;
        } else {
            return item;
        }
    },

    deleteRow: function (item) {
        let collectionCount = data.length;
        if (collectionCount > 0) {
            //find the index of object from array that you want to delete
            const currentIndex = data.findIndex(element => element.id === item.id);

            //Log count to Console.
            //console.log("Count before deletion: ", data.length);

            // removce from the array
            data.splice(currentIndex, 1);
            return collectionCount = data.length;
        } else {
            return collectionCount;
        }
    },

}

module.exports = crudActions