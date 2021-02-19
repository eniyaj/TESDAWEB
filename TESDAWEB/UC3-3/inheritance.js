//Prototype Inheritance
//Person constructor
function Person(firstName, lastName){
    this.firstName = firstName;
    this.lastName = lastName;
};


//Greeting
Person.prototype.greeting = function(){
    return `Hello there ${this.firstName} ${this.lastName}`;
};

const person1 = new Person('Jane', 'Gutierrez');

console.log(person1.greeting());


//Customer constructor
function Customer(firstName, lastName, phone, membership){
    Person.call(this, firstName, lastName);

    this.phone = phone;
    this.membership = membership;
};


//Inherit the person prototype methods
Customer.prototype = Object.create(Person.prototype);


//Make customer .prototype return Customer
Customer.prototype.constructor = Customer;


//Create Customer
const customer1 = new Customer('Heart', 'Evangelista', '09171234567', 'Diamond');

console.log(customer1.greeting());