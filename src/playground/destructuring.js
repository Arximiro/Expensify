// Object Destructuring
// Set file as Webpack Config entry point to run.

const person = {
    name: 'David',
    age: '32',
    location: {
        city: 'Columbus',
        temp: 30
    }
};

const { name = 'anonymous', age } = person; // Destructures object, pulling off name and age. Sets name default to anonymous which is used if no name exists on the object.
console.log(`${name} is ${age}.`); // Returns David is 32. If no name is in the exists returns anonymous is 32.


const { city, temp: temperature } = person.location; // Renames temp to temperature during destructuring.
if (city && temperature) console.log(`It's ${temperature} in ${city}.`); // Returns It's 30 in Columbus, if City AND Temperature both exist.

const book = {
    title: 'Ego is the Enemy',
    author: 'Ryan Holiday',
    publisher: {
        name: 'Penguin'
    }
};

const { name: publisherName = 'Self-Published' } = book.publisher; // Renames name property to PublisherName, and sets default to Self-Published if no names exists.

console.log(publisherName); // Returns Penguin








// Array Destructuring

const address = ['1299 S Juniper Street', 'Philadelphia', 'Pennsylvania', '19147'];

const [street, town, state, zip] = address; // Pulls everything off the array, naming each item pulled off.
// const [, , state] = address; << This would just destrucutre state off the array.

console.log(`You are in ${town} ${state}.`); // Returns You are in Philadelphia Pennsylvania.


const item = ['Coffee (hot)', '$2.00', '$2.50', '$2.75'];
const [coffee, , price] = item; // Pulls the 1st and 3rd item off the array and names them, ignoring the 2nd item.
console.log(`A medium ${coffee} costs ${price}.`); // Returns A medium Coffee (hot) costs $2.50.
