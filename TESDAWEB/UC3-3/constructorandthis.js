//Object literal
// const person = {
//     name: 'nicko'
// };

// console.log(person);


//Person constructor
// function Person(){
//     this.name = 'Kicks'
// };

// const kicks = new Person();

// console.log(kicks);

// function Person(name, age){
//     this.name = name;
//     this.age = age;
// };

// const cardo = new Person('Cardo', 28);
// const dalisay = new Person('Dalisay', 25);

// console.log(cardo);
// console.log(dalisay);


//Constructor and This Keyword
//Person constructor
function Person(name, dob){
    this.name = name;
    this.birthday = new Date(dob);
    this.calculateAge = function(){
        const diff = Date.now() - this.birthday.getTime();
        const ageDate = new Date(diff);
        return Math.abs(ageDate.getUTCFullYear() - 1970);
    }
};

const Jane = new Person('Jane', '05/04/89');
const Cez = new Person('Cez', '01/20/92');

console.log(Jane);
console.log(Cez);
console.log(Jane.calculateAge());
console.log(Cez.calculateAge());