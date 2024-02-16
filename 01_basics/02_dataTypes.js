"use strict"; // treat all JS code as a newer version i.e. we will use new syntax like classes, modules, etc.

//alert(3+3) //error(not defined) as we are using nodejs, not browser
/* there is a different way to write alert in nodejs(study later) */

console.log(3
    +
     3)//code readability should be high

console.log("hello")

/*ECMAScript : An organization which will write javascript standards
i.e. if we are applying loop: input and output should look like this only according to the standard */

//For documentation : tc39, mdn web docs

//DATA TYPES

let name = "welcome"//string
let age = 18//integer
let isLoggedIn = false//boolean
let state = null

/* PRIMITIVE DATA TYPES */

//number(range) => 2 to power 53
//bigint
//string => ""
//boolean => true/false
//null => standalone value
//undefined => representation of an empty value
//symbol => to find uniqueness in a component

/* NON PRIMITIVE DATA TYPES */

//object


console.log(typeof "welcome"); //typeof tells the data type
console.log(typeof age);
/* IMP! null(dataType) - object, undefined(dataType) - undefined */
console.log(typeof null);
console.log(typeof undefined);