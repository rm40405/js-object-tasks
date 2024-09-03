/*
Loop through an object and print the key-value pairs with their types

Input:

let myObject = {

name: 'John Doe',                   
age: 25,
city: 'Example City',
isStudent: true
};
output:
key: name | type:  string
key: age | type:  number
key: city | type:  string
key: isStudent | type:  boolean
*/
let myObject = {

    name: 'John Doe',                   
    age: 25,
    city: 'Example City',
    isStudent: true
    };
    let key = Object.keys(myObject);
    for(let key in myObject){
        console.log('key: '+key+" | type: "+typeof(myObject[key]));   // Print key and type of each property in the object
       
    }
    