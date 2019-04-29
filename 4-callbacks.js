// setTimeout(() => { 
//     console.log("Two seconds are up!")
// }, 2000)

// const names = ["John", "Adam", "Yolanda"]
// const shortNames = names.filter((name)=> {
//     return name.length <= 4
// })

// // console.log(shortNames)

// const geocode = (address, callback) => {
//     setTimeout(() => { 
//         const data = {
//             latitude: 0,
//             longitude: 1,
//         }
        
//         callback(data)
//     }, 2000)
// }

// geocode('Philadelphia', (data) => {
//     console.log(data)
// })


//
// Goal: Mess around with the callback pattern
//
// 1. Define an add function that accepts the correct arguments
// 2. Use setTimeout to simulate a 2 second delay
// 3. After 2 seconds are up, call the callback function with the sum
// 4. Test your work!

// const add = (callback, ...args) => {

//     setTimeout(() => {
//         const reducer = (accumulator, currentValue) => accumulator + currentValue
//         const sum = args.reduce(reducer)

//         callback(sum)
//     }, 2000)
// }

// add((sum) => {
//     console.log(sum) // Should print: 5
// }, 1,4,9,100)


//====================================
//CALLBACK VS PROMISE
const doWorkCallback = (callback) => {

    setTimeout(() => {
        callback(undefined, [1, 4, 7]) //result
        // callback('This is my error', undefined) //error
    }, 2000)
}

doWorkCallback((error, result) => {
    if (error) {
        return console.log(error)
    }

    console.log(result)
})
