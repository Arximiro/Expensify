// Array Spread Operator

const names = ['Joe', 'Jason', 'David'];
const names2 = [...names, 'Julie'];
const names3 = ['Kim', ...names];
const names4 = ['Tiffany', ...names, 'Pete'];

// Creates a new array using the data from another array and adding to it. Leaving the original array unchanged.
// Can use it at any point in the new array to spread the data from the other array into the new one.

console.log(names);  // returns ["Joe", "Jason", "David"]
console.log(names2); // returns ["Joe", "Jason", "David", "Julie"]
console.log(names3); // returns ["Kim", "Joe", "Jason", "David"]
console.log(names4); // returns ["Tiffany", "Joe", "Jason", "David", "Pete"]
//----------------------------------------------------------------------------------------------------------------------------

// Object Spread Operator

const user = {
    name: 'David',
    age: 32
};

console.log({ ...user }); // Returns {name: "David", age: 32}
console.log({ ...user, location: 'Columbus' }); // Returns {name: "David", age: 32, location: "Columbus"} Appending new property location
console.log({ ...user, location: 'Columbus', age: 33 }); // Returns {name: "David", age: 33, location: "Columbus"} Overwriting age
console.log({ age: 25, ...user, location: 'Columbus' }); // Returns {age: 32, name: "David", location: "Columbus"} Age gets overwritten by the spread doing it this way

const user2 = {
    ...user,
    location: 'Columbus',
    vehicle: 'Civic'
};

console.log({ ...user2 }); // Returns {name: "David", age: 32, location: "Columbus", vehicle: "Civic"}
console.log({ ...user }); // Returns {name: "David", age: 32} - Demonstrating that we can use this to create new objects without altering the initial object.

const newProps = {
    name: 'David Ridgley',
    city: 'Columbus',
    state: 'Indiana',
    car: {
        make: 'Honda',
        model: 'Civic',
        year: '2017'
    }
};
const user3 = {
    ...user,
    ...newProps
};

console.log(user3); // Returns {name: "David Ridgley", age: 32, city: "Columbus", state: "Indiana", car: {…}}
// Using the spread operator like this adds the newProps object onto the existing user obj.     //car: {make: "Honda", model: "Civic", year: "2017"}
// Overwriting any props on user that were also on newProps, like name.                           |
// Also added on is the sub-object car that was part of newProps. ---------------------------------
// We use a method like this to update objects in our Reducers in Redux, overwriting the old props of an object with the new ones.
