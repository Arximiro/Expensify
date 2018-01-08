// Examples of different ways to manipulate data in Firebase

//------------------------------------------------------------------------------
// --- child_removed will NOT run once, but it will run every time an expense is removed, and it will log that expense. ---
// --- child_changed will NOT run once, but it will run every time an expense is changed, and it will log that expense. ---
// --- child_added WILL run once, logging every expense currently present, then it will log each new expense added after. ---

// database.ref('expenses').on('child_removed', (snapshot) => {
//     console.log(snapshot.key, snapshot.val());
// });

// database.ref('expenses').on('child_changed', (snapshot) => {
//     console.log(snapshot.key, snapshot.val());
// });

// database.ref('expenses').on('child_added', (snapshot) => {
//     console.log(snapshot.key, snapshot.val());
// });

// setTimeout(() => {
//     database.ref('expenses').push({
//         description: 'Computer Chair',
//         note: 'SecretLab Titan',
//         amount: 38000,
//         createdAt: 56000
//     });
// }, 3000);
//------------------------------------------------------------------------------








//------------------------------------------------------------------------------
// --- Subscribes to expenses, will perform the function whenever the data changes. ---

// database.ref('expenses').on('value', (snapshot) => {
//     const expenses = [];

//     snapshot.forEach((childSnapshot) => {
//         expenses.push({
//             id: childSnapshot.key,
//             ...childSnapshot.val()
//         });
//     });
//     console.log(expenses);
// });
//------------------------------------------------------------------------------








//------------------------------------------------------------------------------
// --- Referenes expenes once, then takes the snapshop and iterates over it, converting expenses to an array. ---

// database.ref('expenses')
//     .once('value')
//     .then((snapshot) => {
//         const expenses = [];

//         snapshot.forEach((childSnapshot) => {
//             expenses.push({
//                 id: childSnapshot.key,
//                 ...childSnapshot.val()
//             });
//         });
//         console.log(expenses);   
//     });
//------------------------------------------------------------------------------








//------------------------------------------------------------------------------
// --- Pushes expense data to the database, storing it under reference expenses. ---

// database.ref('expenses').push({    
//     description: 'Car',
//     note: '',
//     amount: 50800,
//     createdAt: 1200
// });

// database.ref('expenses').push({
//     description: 'Rent',
//     note: 'House Payment Jan',
//     amount: 108000,
//     createdAt: 1400
// });

// database.ref('expenses').push({
//     description: 'Lunch',
//     note: 'Burger',
//     amount: 95400,
//     createdAt: 4500
// });
//------------------------------------------------------------------------------



//------------------------------------------------------------------------------
// --- References location/city in the database, then logs that to the console, catch runs if it fails, and logs that error instead. ---

// database.ref('location/city')
//     .once('value')
//     .then((snapshot) => {
//         //const val = snapshot.val();
//         console.log(snapshot.val());
//     })
//     .catch((e) => {
//         console.log('Error fetching data', e);
// });
//------------------------------------------------------------------------------








//------------------------------------------------------------------------------
// --- This subscribes to the entire database, and when any data is changed, it logs the message. ---

// database.ref().on('value', (snapshot) => {
//      const val = snapshot.val();
//      console.log(`${val.name} is a ${val.job.title} at ${val.job.company}.`);
// });

// setTimeout(() => {
//     database.ref('name').set('Pete');
// }, 3000);

// setTimeout(() => {
//     database.ref('job/title').set('Manager');
// }, 5000);

// setTimeout(() => {
//     database.ref('job/company').set('Google');
// }, 7000);
//------------------------------------------------------------------------------








//------------------------------------------------------------------------------
// --- This creates some data in the database, logs a message if successful, catches the error if not. ---
// --- Then is uses update to update certain data. ---
// --- Then it uses removes to remove some data, logging a message if successful, logging an error if not. ---

// database.ref().set({
//     name: 'David',
//     age: 32,
//     stressLevel: 6,
//     job: {
//         title: 'Software Developer',
//         company: 'Google'
//     },
//     location: {
//         city: 'Philly',
//         country: 'United States',
//     }
// }).then(() => {
//     console.log('Data is saved.');
// }).catch((e) => {
//     console.log('This failed.', e);
// });

// database.ref().update({
//     stressLevel: 9,
//     'job/company': 'Amazon',
//     'location/city': 'Seattle'
// });

// database.ref().remove().then(() => {
//     console.log('Removal Successful');
// }).catch((e) => {
//     console.log('Removal Failed');
// });
//------------------------------------------------------------------------------
