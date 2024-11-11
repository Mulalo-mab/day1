// variables
//string
// let name = "Mulalo"
// const name = "mulalo"
// var name = "Mulalo"

// Numbers
// let number = 10.5

// Boolean
// let value = true

// undefined
// let name
// null
// let value = null
// console.log(name);

// array
// let myArray = ["anything" ,2, true, "string"]
// console.log(myArray[0]) //indexing
// camelcase -> myArray(always used in JS)
// Pascalcase ->MyArray
// kebabcase ->my-array(only use vue)


//object litaeral- declare(make) an object
let table = {
    material:"wood",
    no_of_legs:4,
    occupied: true
}

//bracket notation
console.log(table['material']);

// dot notation
console.log(table.material);

// destructuring
let {material, occupied} = table //wood
console.log(material);
console.log(occupied);

// Functions
// () -> parentheses
// [] -> brackets
// {} -> braces
function greeting(a, b) {
    // a&b are parameters
    console.log("This is a greeting"+ (a+b));
}

// 3&4 are arguments
greeting(3,4);


let num1 = 5
// ++num1 pre increment
// num1++ post increment
// --num1 pre decrement
// num1-- post decrement
console.log(++num1);
console.log(num1++);
console.log(--num1);
console.log(num1--);

// Extra information

let myString = "Something"
// used to check the length of the text something have 9 letters
let length = myString.length
console.log(myString.length);

// Make the string capital or  small lowercase  myString.toUpperCase or myString.toLowerCase
console.log(myString.toLowerCase)

// split letters of the string or convert string to array
let split = myString.split('');
console.log(split);



