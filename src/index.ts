// strings, number, boolean, any(does not read typeof)
let id:number=5
console.log('ID:',id)
//arrays
let employees:number[]=[1,2,3]
console.log("employees:",employees)
//we have tuples that can take any primitive type example
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