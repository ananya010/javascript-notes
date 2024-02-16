let score = "23";
console.log(typeof score);
//OR
console.log(typeof(score));
//now change the dataype to string
let valNumber = Number(score)  //this will always display the datatype as number
console.log(typeof valNumber);
// score="23abc";
// let val1 = (Number(score));
// console.log(val1);

// score=null;
// let val1 = (Number(score));
// console.log(val1);

// score=undefined;
// let val1 = (Number(score));
// console.log(val1);

// score=true;
// let val1 = (Number(score));
// console.log(val1);

score="hello";
let val1 = (Number(score));
console.log(val1);

/*    Number method conversion
  "23"(int) =>23
  "23abc"(string) => NaN [Not a Number]
  true(boolean) => 1
  null(object) => 0
  undefined(undefined) => NaN
  "hello"(string) => NaN
*/

//Boolean method conversion

let logg = 1;
let boolLogg = Boolean(logg);
console.log(boolLogg); 
// ""(empty string) => false
// "hello"(string) => true
// 0(int) => false
// 1(int) => true

//String method conversion

let num = 43;
let strNum = String(num);
console.log(strNum);
console.log(typeof strNum);
