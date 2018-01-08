console.log('Before Promise In File');

//---------------------------------------------------------------
// --- A promise is an async action, it will resolve or reject depending on multiple thing. ---

const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve({
            name: 'David',
            age: 32
        });
        reject('Error Message');
    }, 3000);    
});
//---------------------------------------------------------------






//---------------------------------------------------------------
// --- With promise chaining you can chain multiple promises and return data or promises from one to the next. ---
// --- In this one if the initial promise up top resolves, we log the message, then return a new promise ---
// --- and the then call becomes the resolution of THAT new promise.

promise.then((data) => {
    console.log('1st Promise Resolved: ', data);

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('Super cool message.');
            reject('Error Message');
        }, 3000);    
    });
}).then((data) => {
    console.log('2nd Promise Resolved: ', data);
}).catch((error) => {
    console.log('error: ', error);
});
//---------------------------------------------------------------








//---------------------------------------------------------------
// --- With promise chaining you can chain multiple promises and return data from one to the next. ---

// promise.then((data) => {
//     console.log('1st Promise Resolution: ', data);

//     return 'First Promise Successful'
// }).then((data) => {
//     console.log('2nd Promise Resolution: ', data);
// }).catch((error) => {
//     console.log('error: ', error);
// });
//---------------------------------------------------------------








//---------------------------------------------------------------
// --- You can take the promise and do something when it completes taking in data from the reslove.
// --- You can also set up up a catch call that will catch any errors thrown if the promise is rejected.

// promise.then((data) => {
//     console.log(data);
// }).catch((error) => {
//     console.log('error: ', error);
// });
//---------------------------------------------------------------

console.log('After Promise In File');
