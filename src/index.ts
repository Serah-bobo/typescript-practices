// strings, number, boolean, any(does not read typeof)
let id:number=5
console.log('ID:',id)
//arrays
let employees:number[]=[1,2,3]
console.log("employees:",employees)
//we have tuples that can take any primitive type example
//they have to be written in that order
let buses:[number,string,boolean]=[1,"Brad",true]
console.log("bus:", buses)
//we can combine arrays with tuples
let cars:[number,string][]
cars=[
    [1, "benz"],
    [2, "Honda"]
]
console.log("car:",cars)
//unions are used for combining types  it is formed  from two or more types
const  shoes=(id:number|string)=>{
    console.log("Your id is",+id)
}
shoes(20)
//unions are strict you can only use operations common for all members
//in this example to upper case is operation  for strings not applicable for numbers
//const  shoess=(id:number|string)=>{
  //  console.log(id.toUpperCase)
//}
//shoess(20)
//to use operations when having unions we use narrowing 
const  shoess=(idd:number|string)=>{
    if(typeof idd==="string"){
console.log(idd.toUpperCase)
    }else{
        console.log(idd) 
    }
    
}

shoess("sss")
//using type aliases to refer types more than once
type point={
    x:number;
    y:number;
};
let pt:point={x:40,y:90}
console.log(pt.x)
//enums  are used to define a set of named constants which are related example direction statuses roles we have  numeric enums, string enums
enum direction{
up,
down,side
}
console.log(direction.up)
//object
//A type alias is a way to give a name to any type, including primitive, union, intersection, or other custom types.
type User={
    id:number;
    name:string

}
const user:User={
    id:1,
    name:"James"
}
console.log(user)
//type alias combinin employee and amanger
type Employee = {
    name: string;
    age: number;
    employeeId: number;
};

type Manager = Employee & {
    department: string;
    subordinates: Employee[];
};

const manager: Manager = {
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

//interface is another way to declare object type, they  work with unions, interfaces can be changed
//Interfaces can be extended and merged, making them more flexible in terms of inheritance and augmentation.
//Type Aliases are more flexible when defining complex types, such as unions and intersections, or when working with primitive types.
interface Users{
    id:number;
    name:string

}
const userr:Users={
    id:1,
    name:"James"
}
console.log(userr)
//example of changing interface
interface Person{
    name:string;
    age?:number//meaning age is optional parameter

}
interface employee extends Person{
    userId:number
}
const person:employee={
    name:"Bob",
    userId:6,
    age:60
}
console.log(person)
//classes are used in creating objects with specific properties and methods
//classes takes properties and a constructor whichh runs when the class is called
//a constructor is a method that is called when an instance or object of a class is created.it initializes newly created objects
//this refers to the class we are in
class people{
    id:number;
    name:string;
    constructor(id:number, name:string){
        this.id=id;
        this.name=name
    }
    register(){
        return `${this.name} is  now registered`
    }
}
const Brad=new people(4,"Brad")
console.log(Brad)
//classes can be modified
Brad.id=5
console.log(Brad.register())
//they also have access modifiers like private public  and protected eg private id
// we can use classes with interfaces by using implements
interface food{
    id:number;
    name:string
}
class foodname implements food{
    id:number;
    name:string
    constructor(id:number,name:string){
        this.id=id;
        this.name=name 
    }
}
const Pizza=new foodname(1,"Pizza")
console.log(Pizza)
//classes have inheritance it is allowing a class to extend another class and inherit its properties and methods
//subclass
class society extends people{
    size:number
    constructor(id:number,name:string,  size:number){
        super(id,name)//super is used within a subclass to refer to its parent class it allows accessing parents methods and calling parents constructor
        this.size=size
    }
}
const soc=new society(2,"Dan",3)
console.log(soc)
console.log(soc.register())
//Static members (properties and methods) belong to the class itself rather than any instance of the classshared across the class
//They are accessed using the class name rather than the object name.
//Static Members are tied to the class itself. There is only one copy, shared by all instances, and they are accessed using the class name rather than an instance.
class Counter {
    // Static property to count the number of instances
    static count: number = 0;
  
    // Instance property
    id: number;
  
    constructor() {
      Counter.count++; // Increment the static count whenever a new instance is created
      this.id = Counter.count; // Assign a unique ID to each instance based on the static count
    }
  
    // Instance method to display the ID of the instance
    displayId(): void {
      console.log(`Instance ID: ${this.id}`);
    }
  
    // Static method to display the total number of instances
    static displayCount(): void {
      console.log(`Total instances: ${Counter.count}`);
    }
  }
  
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
  class circumfrence{
    static pi:number=3.14;//static property
    
    shape:string
    constructor(shape:string){
        
        this .shape=shape
    }
    static calculatecircumfrence(radius:number):number{
        return 2 * circumfrence.pi * radius
        
    }
  }
  const shapes=new circumfrence("circle")
  console.log(shapes)
 console.log(circumfrence.calculatecircumfrence(6)) 
 //Generics
// Generics are a powerful feature in TypeScript that allows you to write code that can work with a variety of types while still providing type safety. 
//They enable you to create reusable components, functions, and classes that can operate on different data types without sacrificing the benefits of static typing.
const identity=<T>(arg:T):T=>arg
const number=identity<number>(42)
const text=identity<string>("Hi")
console.log(number)
console.log(text)
//generic functions
//Generic functions are functions that can accept arguments and return values of different types, specified by type parameters.
const reverseArray=<T>(items:T[]):T[]=>items.reverse()
const numbers=[1,2,3,4,5]
const reverseNumbers=reverseArray(numbers)
console.log(reverseNumbers)
const words=["apple","banana","mango"]
const reverseWords=reverseArray(words)
console.log(reverseWords)
//merge arrays
//array one has type T and two has type U

const mergeArrays=<T, U>(array1:T[], array2:U[]):(T|U)[]=>[...array1, ...array2];
const numbersArray = [1, 2, 3];
const stringsArray = ["one", "two", "three"];
const mergedArray = mergeArrays(numbersArray, stringsArray);

console.log(mergedArray); 
