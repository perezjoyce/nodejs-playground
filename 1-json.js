const fs = require('fs');
//LOAD... 
const buffer = fs.readFileSync('1-json.json')
const dataJSON = buffer.toString();

//AND PARSE THE JASON DATA
const user = JSON.parse(dataJSON); // so you can modify values

//CHANGE THE NAME AND PROPERTY USING YOUR INFO
user.name = "John Garcia"
user.planet = "Jupiter"
user.age = 32

//STRINGIFY THE CHANGED OBJECT so you can return JSON object 
const userJSON = JSON.stringify(user);

//OVERWRITE THE ORIGINAL DATA
fs.writeFileSync('1-json.json', userJSON)