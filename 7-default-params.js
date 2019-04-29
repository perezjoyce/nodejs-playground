//DEFAULT PARAMETER
// const greeter = (name='User') => {
//     console.log('Hello ' + name)
// }

// greeter('Joyce')
// greeter()


const transaction = (type, { label, stock = 0 } = {}) => {
    console.log(type, label, stock) // order Red notebook 201
}

transaction('order')
transaction('order')
