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
const manager = {
    name: "Alice",
    age: 35,
    employeeId: 1001,
    department: "Engineering",
    subordinates: [
        { name: "Bob", age: 28, employeeId: 1002 },
        { name: "Charlie", age: 30, employeeId: 1003 }
    ]
};
console.log(manager);
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
//classes takes properties and a constructor whichh runs when the class is called
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
//subclass
class society extends people {
    constructor(id, name, size) {
        super(id, name); //super is used within a subclass to refer to its parent class it allows accessing parents methods and calling parents constructor
        this.size = size;
    }
}
const soc = new society(2, "Dan", 3);
console.log(soc);
console.log(soc.register());
//Static members (properties and methods) belong to the class itself rather than any instance of the classshared across the class
//They are accessed using the class name rather than the object name.
//Static Members are tied to the class itself. There is only one copy, shared by all instances, and they are accessed using the class name rather than an instance.
class Counter {
    constructor() {
        Counter.count++; // Increment the static count whenever a new instance is created
        this.id = Counter.count; // Assign a unique ID to each instance based on the static count
    }
    // Instance method to display the ID of the instance
    displayId() {
        console.log(`Instance ID: ${this.id}`);
    }
    // Static method to display the total number of instances
    static displayCount() {
        console.log(`Total instances: ${Counter.count}`);
    }
}
// Static property to count the number of instances
Counter.count = 0;
// Creating instances
const obj1 = new Counter();
const obj2 = new Counter();
const obj3 = new Counter();
obj1.displayId(); // Output: Instance ID: 1
obj2.displayId(); // Output: Instance ID: 2
obj3.displayId(); // Output: Instance ID: 3
// Accessing the static method
Counter.displayCount(); // Output: Total instances: 3
//another example
class circumfrence {
    constructor(shape) {
        this.shape = shape;
    }
    static calculatecircumfrence(radius) {
        return 2 * circumfrence.pi * radius;
    }
}
circumfrence.pi = 3.14; //static property
const shapes = new circumfrence("circle");
console.log(shapes);
console.log(circumfrence.calculatecircumfrence(6));
//Generics
// Generics are a powerful feature in TypeScript that allows you to write code that can work with a variety of types while still providing type safety. 
//They enable you to create reusable components, functions, and classes that can operate on different data types without sacrificing the benefits of static typing.
const identity = (arg) => arg;
const number = identity(42);
const text = identity("Hi");
console.log(number);
console.log(text);
//generic functions
//Generic functions are functions that can accept arguments and return values of different types, specified by type parameters.
const reverseArray = (items) => items.reverse();
const numbers = [1, 2, 3, 4, 5];
const reverseNumbers = reverseArray(numbers);
console.log(reverseNumbers);
const words = ["apple", "banana", "mango"];
const reverseWords = reverseArray(words);
console.log(reverseWords);
//merge arrays
//array one has type T and two has type U
const mergeArrays = (array1, array2) => [...array1, ...array2];
const numbersArray = [1, 2, 3];
const stringsArray = ["one", "two", "three"];
const mergedArray = mergeArrays(numbersArray, stringsArray);
console.log(mergedArray);
const numberPair = { key: 1, value: "one" };
console.log(numberPair);
//generic classes
class DataStore {
    constructor() {
        this.data = [];
    }
    addItem(item) {
        this.data.push(item);
    }
    removeItem(item) {
        this.data = this.data.filter((element) => element !== item);
    }
    getItems() {
        return [...this.data];
    }
}
const numberStorage = new DataStore();
numberStorage.addItem(10);
numberStorage.addItem(20);
numberStorage.removeItem(10);
console.log(numberStorage.getItems());
const stringStorage = new DataStore();
stringStorage.addItem("Hello");
stringStorage.addItem("world");
stringStorage.removeItem("Hello");
console.log(stringStorage.getItems());
//multiple class types
class hairStyles {
    constructor(key, value) {
        this.key = key;
        this.value = value;
    }
    getKey() {
        return this.key;
    }
    getValue() {
        return this.value;
    }
}
const pair = new hairStyles(1, 1000);
console.log(pair.getKey);
console.log(pair.getValue);
//extending generic classes
class hairType extends hairStyles {
    constructor(key, value, name) {
        super(key, value);
        this.getName = () => this.name;
        this.name = name;
    }
}
const HairIdea = new hairType(1, 2000, "Brazillian locks");
console.log(HairIdea.getValue);
console.log(HairIdea.getName);
