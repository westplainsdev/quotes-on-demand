const data = require('./data.json');
const crud = require('./crudFunctions');

crud.loadData(data);

console.log('Get All ', crud.getAll());

let response = crud.getdById(5)
if (response) {
    console.log('Get by ID ', response);
} else {
    console.log(response);
}

// update an exsiting row item
let updatedRow = {
    id: 4,
    author: 'Edward',
    text: 'Something 1979'
};

console.log('After update: ', crud.updateRow(updatedRow));

console.log('Count after deletion', crud.deleteRow({
    id: 3
}));

console.log('Get All ', crud.getAll());

//add new row items to the collection
let newItem1 = {
    author: 'Robert',
    text: 'Now is the time to do this.'
};
let newItem2 = {
    author: 'Franklin',
    text: 'Four score and seven years ago.'
};
crud.addRow(newItem1);
crud.addRow(newItem2);

console.log('Get All ', crud.getAll());

console.log('Count after deletion', crud.deleteRow({
    id: 5
}));
console.log('Get All ', crud.getAll());