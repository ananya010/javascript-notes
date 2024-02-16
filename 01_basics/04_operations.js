let value = 2;
let negValue = -value;
// console.log(negValue);

// console.log(2+2);
// console.log(2-2);
// console.log(2*2);
// console.log(2**3); //raised to power
// console.log(2/2);
// console.log(2%2);

let str1 = "hello";
let str2 = " abc";
let str3 = str1 + str2;
console.log(str3);

console.log("1" + 2); //12
console.log(1 + "2"); //12
console.log("1" + 2 + 2); //122
console.log(1 + 2 + "2"); //32
//(By ECMAScript)

//special conversions which should be avoided

console.log(true);
console.log(+true);
// console.log(true+);// error
console.log(+"");
let cnt = 100;

//post-fix operator (value incremented later)
cnt++; //101
console.log(cnt);
//pre-fix operator (value incremented first)
++cnt; //101
console.log(cnt);
// to study search prefix and postfix js mdn