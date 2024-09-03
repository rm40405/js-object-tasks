/*Count the number of properties.

Input:

let student = {
    name: 'Ariana Grande',
    age: 21,
    city: 'Gaibandha',
    isStudent: true
};
*/
let student = {
    name: 'Ariana Grande',
    age: 21,
    city: 'Gaibandha',
    isStudent: true
};
let countProperty = Object.keys(student);
for(let i = 0; i < countProperty.length; i++){
    console.log(countProperty[i]);  // Output: name, age, city, isStudent  // Output: 4 properties found in the student object.  // The console.log statement is used to display each property name.  // The length of the countProperty array gives us the number of properties in the student object.  // The loop iterates over the countProperty array, printing each property name.  // The output shows the four properties of the student object.  // The count of properties is 4.  // The console.log statement prints each property name.  // The loop iterates over the countProperty array, printing each property name.  // The output shows the four properties of the student object.  // The count of properties is 4.  // The console.log statement prints each property name.  // The loop iterates over the countProperty array, printing each property name.  // The output shows the four properties of the
}

console.log(countProperty.length); // Output: 4


