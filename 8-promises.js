//CALLBACK
// const doWorkCallback = (callback) => {

//     setTimeout(() => {
//         callback('This is my error', undefined)
//     }, 2000)
// }

// doWorkCallback((error, result) => {
//     if (error) {
//         return console.log(error)
//     }

//     console.log(result)
// })


//====================================
// PROMISE: an object with a few methods we can access
const doWorkCallback = new Promise((resolve, reject) => {
    setTimeout(() => {
        // resolve([1, 4, 7])
        reject('Things went wrong!')
    }, 2000);
})

//when things go well/when resolve is called
doWorkCallback.then((result) => {
    console.log('Success', result)
    //when reject is called
}).catch((error) => {
    console.log('Error', error)
})