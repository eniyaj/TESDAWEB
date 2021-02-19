// single line comment

/*
multi line comments
*/

var name = 'Bella Swan'; //variable
console.log(name);
name = 'Bella';
console.log(name);

var food; //initialize var undefined
console.log(food);
food = 'Lasagna'; //defined var
console.log(food);

//acceptable var letters, numbers, _, $
//cannot start with a number

var firstName = 'Bella'; //camel cased *2nd word uppercase *SUGGESTED
var first_name = 'Jane'; //underscore multi word vars
var FirstName = 'Gutierrez'; //pascal case *both uppercase
console.log (firstName);
console.log (first_name);
console.log (FirstName);

let drink; //let
drink = 'Milk Tea';
console.log (drink);

const names = 'Cez'; //const can't reassign
console.log (name);

//const object *property can be changed
const person = {       
    name: 'Bella',
    age: 30
};
console.log(person)

person.age = (19);
console.log(person)

const numbers = [1,2,4,5,6,7,8,9,0]; //const number array

numbers.push(38);
console.log(numbers);