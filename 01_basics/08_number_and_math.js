const num = 100;
console.log(num);//100
//to declare a number using object with new keyword(it will always be number datatype)
const balance = new Number(100);
console.log(balance);//[Number: 100] as it is an object

//Number methods
console.log(balance.toString());//changes the data type to string
console.log(typeof balance.toString());
//length is  a property not a function
console.log(balance.toString().length);

//.toFixed() method: precise the value to the decimal point mentioned
console.log(balance.toFixed(2));

//.toPrecision() method: it gives a precised value upto the given number, round off the number and return STRING data type
const otherNumber = 123.567;
console.log(otherNumber.toPrecision(4));//123.6
console.log(otherNumber.toPrecision(3));//124
console.log(otherNumber.toPrecision(2));//1.2e+2 (1.2 and rest in exponential form)

//.toLocaleString() method: makes represntation easy
const hundreds = 1000000;
console.log(hundreds.toLocaleString());//1,000,000 by default US standards
//for indian standards
console.log(hundreds.toLocaleString('en-IN'));//10,00,000
//Number.MIN_VALUE
//Number.MAX_VALUE


/* +++++++++++++++++++++++++++++++++++++++++++++++*/

//Math library is by default in javascript
console.log(Math);//an object having too many properties

//.abs() value: returne an absolute value, i.e. changes a negative value to positive value
console.log(Math.abs(-4));//4
console.log(Math.round(4.6));//5
console.log(Math.ceil(4.2));//5 (round to top value)
console.log(Math.floor(4.9));//4 (round to lowest value)
console.log(Math.sqrt(625));//25
console.log(Math.pow(4,2));//16 i.e. 4^2

console.log(Math.min(4,3,6,8));//3
console.log(Math.max(4,3,6,8));//8

//Math.random() method: gives a random value between 0 and 1(0 and 1 included)
console.log(Math.random());
console.log(Math.random()*10);//1 digit shift to left but in this case range starts frrom 0
//COMPLICATED
// console.log(Math.random()*10 + 1);//we added 1 so now the range starts from 1

console.log((Math.random()*10) + 1);//correct method
console.log(Math.floor(Math.random()*10) + 1);//round off to the lowest value


//FORMULA IMP
const min = 10;//declare minimum value
const max = 20;//declarae maximum value

//FORMULA: (Math.random() * (max-min+1)) +min
//Instead of 10 we multiplied with (max-min+1) + min, we want a minimum value so we add + min and +1, so as not to get 0.

console.log((Math.random()* (max-min+1)));//not showing minimum value so we added min
console.log((Math.random() * (max-min+1))+min);
//to round-off to the lowest
console.log(Math.floor(Math.random() * (max-min+1))+min);
