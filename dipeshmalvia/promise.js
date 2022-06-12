// https://www.youtube.com/watch?v=JvV4Rz2PpzA


// const promise = new Promise((resolve, reject) => {
//     console.log('Async Task Execution');
//     if (true) {
//         resolve();
//     } else {
//         reject();
//     }
// });

// promise.then(
//     () => { 
//         console.log('Passed !');
//     }, 
//     () => { 
//         console.log('Failed !');
//     }
// );


const promise = new Promise((resolve, reject) => {
    console.log('Async Task Execution');
    throw "err";
    if (true) {
        const person = { name: 'Md.Sami' }
        resolve(person);
    } else {
        const error = { errorCode: '1001' }
        reject(error);
    }
});

promise.then(
    (val) => {
        console.log(val);
    },
    (err) => {
        console.log(err);
    }
).catch(
    () => {
        console.log('Failed')
    }
)
    .finally(
        () => {
            console.log('Clean Up')
        });
