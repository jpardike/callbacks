const person = {
    firstName: 'Victoria',
    lastName: 'Smith',
}

function getFirstName(nameObj, callback) {
    const firstName = nameObj.firstName;

    callback(firstName);
}

function logName(string) {
    console.log(string);
}

// getFirstName(person, logName);

////////////////////////////////////////////////
////////////////////////////////////////////////

const groceryList = [
    'tomato',
    'cheese',
    'noodles',
    'seasoning',
    'ground pepper',
    'garlic bread',
]

groceryList.forEach = function(callback) {
    for (let i = 0; i < this.length; i++) {
        callback(this[i]);
        
    }
};

groceryList.forEach((item) => {
    console.log(item);
});

// function printItem(item) {
//     console.log(item);
// }

// function loopTroughItems(list, callback) {
//     for (let i = 0; i < list.length; i++) {
//      console.log(list[i]);
//     }
// }

// loopTroughItems(groceryList, (item) => {
//     console.log(item)
// });



////////////////////////////////////////////////