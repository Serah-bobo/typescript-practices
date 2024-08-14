"use strict";
// strings, number, boolean, any(does not read typeof)
let id = 5;
console.log('ID:', id);
//arrays
let employees = [1, 2, 3];
console.log("employees:", employees);
//we have tuples that can take any primitive type example
//they have to be written in that order
let buses = [1, "Brad", true];
console.log("bus:", buses);
//we can combine arrays with tuples
let cars;
cars = [
    [1, "benz"],
    [2, "Honda"]
];
console.log("car:", cars);
//unions are used for combining types  it is formed  from two or more types
const shoes = (id) => {
    console.log("Your id is", +id);
};
shoes(20);
//unions are strict you can only use operations common for all members
//in this example to upper case is operation  for strings not applicable for numbers
//const  shoess=(id:number|string)=>{
//  console.log(id.toUpperCase)
//}
//shoess(20)
//to use operations when having unions we use narrowing 
const shoess = (idd) => {
    if (typeof idd === "string") {
        console.log(idd.toUpperCase);
    }
    else {
        console.log(idd);
    }
};
shoess("sss");
let pt = { x: 40, y: 90 };
console.log(pt.x);
//enums  are used to define a set of named constants which are related example direction statuses roles we have  numeric enums, string enums
var direction;
(function (direction) {
    direction[direction["up"] = 0] = "up";
    direction[direction["down"] = 1] = "down";
    direction[direction["side"] = 2] = "side";
})(direction || (direction = {}));
console.log(direction.up);
const user = {
    id: 1,
    name: "James"
};
console.log(user);
const userr = {
    id: 1,
    name: "James"
};
console.log(userr);
const person = {
    name: "Bob",
    userId: 6,
    age: 60
};
console.log(person);
//classes are used in creating objects with specific properties and methods
//classes takes propersties and a constructor whichh runs when the class is called
//a constructor is a method that is called when an instance or object of a class is created.it initializes newly created objects
//this refers to the class we are in
class people {
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
    register() {
        return `${this.name} is  now registered`;
    }
}
const Brad = new people(4, "Brad");
console.log(Brad);
//classes can be modified
Brad.id = 5;
console.log(Brad.register());
class foodname {
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
}
const Pizza = new foodname(1, "Pizza");
console.log(Pizza);
//classes have inheritance it is allowing a class to extend another class and inherit its properties and methods
class society extends people {
    constructor(id, name, size) {
        super(id, name);
        this.size = size;
    }
}
const soc = new society(2, "Dan", 3);
console.log(soc);
console.log(soc.register());
