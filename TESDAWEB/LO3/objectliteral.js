//Object
const person = {
    firstName: 'Jane',
    lastName: 'Gutierrez',
    age: 31,
    email: '04janefrances@gmail.com',
    hobbies : ['Baking', 'Cooking', 'Reading'],
    address: {
        city: 'San Leonardo',
        street: 'Adorable',
    },
    getBirthYear: function () {
        return 2021 - this.age;      
    }

};

let value;

value = person;
console.log(value)

value = person.firstName;
console.log(value)

value = person.lastName;
console.log(value)

value = person.age;
console.log(value)

value = person.hobbies[0];
console.log(value)

value = person.address.city;
console.log(value)

value = person.getBirthYear(); //property method when calling needs ()
console.log(value)


const people = [{name: 'Stephannie', age: 20}, {name: 'Gold', age: 21}, 
    {name: 'Cez', age: 22}];

//for loop
for(let i = 0; i < people.length; i++){
    console.log(people[i].name);
} 