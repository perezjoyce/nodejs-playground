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
// const doWorkCallback = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         // resolve([1, 4, 7])
//         reject('Things went wrong!')
//     }, 2000);
// })

// //when things go well/when resolve is called
// doWorkCallback.then((result) => {
//     console.log('Success', result)
//     //when reject is called
// }).catch((error) => {
//     console.log('Error', error)
// })


//====================================
// PROMISE 

const add = (a, b) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(a + b)
        }, 2000)
    })
}

//NESTED PROMISES
add(1, 2).then((sum) => {
    console.log(sum)

    add(sum, 3).then((sum2) => {
        console.log(sum2)
    }).catch((e) => {
        console.log(e)
    })

}).catch((e) => {
    console.log(e)
})

// PROMISE CHAINING
add(1,2).then((sum) => {
    console.log(sum)
    return add(sum, 4)
}).then((sum2) => {
    console.log(sum2)
}).catch((e) => {
    console.log(e)
})