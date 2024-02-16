// console.log(2>1); // greater
// console.log(2>=1)
// console.log(2<1); // lesser
// console.log(2<=1);
// console.log(2!=1);
// console.log(2==1);

//comparison for different data type
console.log("2" > 1); //unpredictible result
//preffered to compare same data type

/* NOTE : TypeScript don't allow us to compare different data types 
          Provides strict rules.
*/

//comparison with null

console.log(null>0);//false
console.log(null==0);//false
console.log(null>=0);//truell

/* reason is equality check(==) and comparisons(>,<, >=,<=) work differentky.
        Comparisons convert nul toa number, treating it as 1
        So, null>= 0 is true and null>0 is false.
*/

console.log(0>0);

console.log(undefined == 0);//always false for equality check and all comparisons comparison with undefined

// === -> strict check
// it not only checks the value but strictly checks the value, i.e. checks its data type also.

console.log("2" === 2); //false -> as it checks the data type to with comparison

console.log("2" == 2); //true -> as it converts the data type and then checks the value.

/*Type casting is a mechanism in which one data type is converted to another data type using a casting () operator by a programmer. Type conversion allows a compiler to convert one data type to another data type at the compile time of a program or code.*/

console.log(2===2);
console.log("2"==2);