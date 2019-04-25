// ====== REGULAR OBJECT ==========

// const name = 'Joyce'
// const userAge = 32

// const user = {
//     name : name,
//     age : userAge, 
//     location: 'Philippines'
// }

// console.log(user)

// ======= OBJECT PROPERTY SHORTHAND =========
/*comes into play when we're setting up a property 
whose value comes from a variable of the same name*/

// const user = {
//     name,
//     age : userAge, 
//     location: 'Philippines'
// }

// console.log(user)

// ======= OBJECT DESTRUCTURING =======
/* useful when you have an object 
& you're trying to access properties from it. 
It's main goal is to extract object properties 
and their values into individual variables */

// const product = {
//     label: 'Red notebook',
//     price: 3,
//     stock: 201,
//     salePrice: undefined // not on sale
// }

// APPROACH 1
// const label = product.label
// const stock = product.stock

// APPROACH 2: DESTRUCTURING SYNTAX
// const {label, stock, rating} = product
// console.log(label) //Red notebook
// console.log(stock)//201
// console.log(rating) //undefined

// const product = {
//     label: 'Red notebook',
//     price: 3,
//     stock: 201,
//     salePrice: undefined // not on sale
// }

// RENAME VARIABLES 
// const {label:productLabel, stock, rating} = product
// console.log(label) //won't work coz it has been renamed
// console.log(productLabel)//will work

// const product = {
//     label: 'Red notebook',
//     price: 3,
//     stock: 201,
//     salePrice: undefined // not on sale
// }

// SETUP A DEFAULT VALUE FOR A VARIABLE SHOULD THE VALUABLE NOT HAVE THE PROPERTY
// const {label:productLabel, stock, rating = 5} = product
// console.log(rating) //5

// ====================================================
// ====== DESTRUCTURING IN FUNCTION ARGUMENTS ==========
const product = {
    label: 'Red notebook',
    price: 3,
    stock: 201,
    salePrice: undefined // not on sale
}

// const transaction = (type, myProduct) => {
    // const { label } = myProduct  //local label variable
// }

const transaction = (type, { label, stock }) => {
    console.log(type, label, stock) // order Red notebook 201
}

transaction('order', product)