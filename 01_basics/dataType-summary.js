/*On the basis of how data is stored and how data can be accessed it is categorized in two ways:
  Primitive Data Type(call by value)
      7 types: String, Number, Boolean, Null, Undefined, Symbol, BigInt
  Non-Primitive Data Type(call by refernce) - allocate refernce in memory
      Array, Objects, Functions
*/
//object master and browser events master

//Is javascript dynamiaclly type languauge or statically type language?

const score = 100;
const scoreValue = 100.3;
const isLoggedIn = false;
const outTemp = null;
let userEmail; //type : undefined

//declaring a symbol(represents a unique identifier)
const id = Symbol('123')
const anotherId = Symbol('123')
//having same value but return value will be differnt
console.log(anotherId);
console.log(anotherId);

const bigNumber = 75757369867387568n;
console.log(bigNumber);

console.log(typeof bigNumber);

/*Non-Primitive*/

//arrays
const heros = ["shaktiman", "spoderman", "marvel"]
//object
let myObj = {
    name: "abc", 
    age: 22
}
//function
// myFunction1() = {}
//declaring function as  a variable
const myFunction = function(){
    console.log("Hello World!");
}

console.log(typeof myFunction);//object function
console.log(typeof myObj);
    console.log(typeof Symnbol);