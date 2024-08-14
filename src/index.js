var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
// strings, number, boolean, any(does not read typeof)
var id = 5;
console.log('ID:', id);
//arrays
var employees = [1, 2, 3];
console.log("employees:", employees);
//we have tuples that can take any primitive type example
//they have to be written in that order
var buses = [1, "Brad", true];
console.log("bus:", buses);
//we can combine arrays with tuples
var cars;
cars = [
    [1, "benz"],
    [2, "Honda"]
];
console.log("car:", cars);
//unions are used for combining types  it is formed  from two or more types
var shoes = function (id) {
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
var shoess = function (idd) {
    if (typeof idd === "string") {
        console.log(idd.toUpperCase);
    }
    else {
        console.log(idd);
    }
};
shoess("sss");
var pt = { x: 40, y: 90 };
console.log(pt.x);
//enums  are used to define a set of named constants which are related example direction statuses roles we have  numeric enums, string enums
var direction;
(function (direction) {
    direction[direction["up"] = 0] = "up";
    direction[direction["down"] = 1] = "down";
    direction[direction["side"] = 2] = "side";
})(direction || (direction = {}));
console.log(direction.up);
var user = {
    id: 1,
    name: "James"
};
console.log(user);
var manager = {
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
var userr = {
    id: 1,
    name: "James"
};
console.log(userr);
var person = {
    name: "Bob",
    userId: 6,
    age: 60
};
console.log(person);
//classes are used in creating objects with specific properties and methods
//classes takes properties and a constructor whichh runs when the class is called
//a constructor is a method that is called when an instance or object of a class is created.it initializes newly created objects
//this refers to the class we are in
var people = /** @class */ (function () {
    function people(id, name) {
        this.id = id;
        this.name = name;
    }
    people.prototype.register = function () {
        return "".concat(this.name, " is  now registered");
    };
    return people;
}());
var Brad = new people(4, "Brad");
console.log(Brad);
//classes can be modified
Brad.id = 5;
console.log(Brad.register());
var foodname = /** @class */ (function () {
    function foodname(id, name) {
        this.id = id;
        this.name = name;
    }
    return foodname;
}());
var Pizza = new foodname(1, "Pizza");
console.log(Pizza);
//classes have inheritance it is allowing a class to extend another class and inherit its properties and methods
//subclass
var society = /** @class */ (function (_super) {
    __extends(society, _super);
    function society(id, name, size) {
        var _this = _super.call(this, id, name) || this; //super is used within a subclass to refer to its parent class it allows accessing parents methods and calling parents constructor
        _this.size = size;
        return _this;
    }
    return society;
}(people));
var soc = new society(2, "Dan", 3);
console.log(soc);
console.log(soc.register());
//Static members (properties and methods) belong to the class itself rather than any instance of the classshared across the class
//They are accessed using the class name rather than the object name.
//Static Members are tied to the class itself. There is only one copy, shared by all instances, and they are accessed using the class name rather than an instance.
var Counter = /** @class */ (function () {
    function Counter() {
        Counter.count++; // Increment the static count whenever a new instance is created
        this.id = Counter.count; // Assign a unique ID to each instance based on the static count
    }
    // Instance method to display the ID of the instance
    Counter.prototype.displayId = function () {
        console.log("Instance ID: ".concat(this.id));
    };
    // Static method to display the total number of instances
    Counter.displayCount = function () {
        console.log("Total instances: ".concat(Counter.count));
    };
    // Static property to count the number of instances
    Counter.count = 0;
    return Counter;
}());
// Creating instances
var obj1 = new Counter();
var obj2 = new Counter();
var obj3 = new Counter();
obj1.displayId(); // Output: Instance ID: 1
obj2.displayId(); // Output: Instance ID: 2
obj3.displayId(); // Output: Instance ID: 3
// Accessing the static method
Counter.displayCount(); // Output: Total instances: 3
//another example
var circumfrence = /** @class */ (function () {
    function circumfrence(shape) {
        this.shape = shape;
    }
    circumfrence.calculatecircumfrence = function (radius) {
        return 2 * circumfrence.pi * radius;
    };
    circumfrence.pi = 3.14; //static property
    return circumfrence;
}());
var shapes = new circumfrence("circle");
console.log(shapes);
console.log(circumfrence.calculatecircumfrence(6));
//Generics
// Generics are a powerful feature in TypeScript that allows you to write code that can work with a variety of types while still providing type safety. 
//They enable you to create reusable components, functions, and classes that can operate on different data types without sacrificing the benefits of static typing.
var identity = function (arg) { return arg; };
var number = identity(42);
var text = identity("Hi");
console.log(number);
console.log(text);
//generic functions
//Generic functions are functions that can accept arguments and return values of different types, specified by type parameters.
var reverseArray = function (items) { return items.reverse(); };
var numbers = [1, 2, 3, 4, 5];
var reverseNumbers = reverseArray(numbers);
console.log(reverseNumbers);
var words = ["apple", "banana", "mango"];
var reverseWords = reverseArray(words);
console.log(reverseWords);
//merge arrays
//array one has type T and two has type U
var mergeArrays = function (array1, array2) { return __spreadArray(__spreadArray([], array1, true), array2, true); };
var numbersArray = [1, 2, 3];
var stringsArray = ["one", "two", "three"];
var mergedArray = mergeArrays(numbersArray, stringsArray);
console.log(mergedArray);
