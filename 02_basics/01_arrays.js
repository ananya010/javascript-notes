//array : collection of multiple elements in a single variable.
//      : it is an object data type.
//      : arrays in js are resizable.
//      : elements are mix of different data types.
//      : zero-based indexing. i.e. first elemnt of an array is at index 0.
// *IMP : Javascript array-copy-operations create shallow copies[a copy whose properties share the same refernce from which the copy was made] rather than deep-copy[properties do not share the same refernce]

const myArr = [0, 1, 2, 3, 4, 5, true, "hello"]
console.log(myArr[6]);
console.log(myArr[0]);

//ways to declare array
const myArr1 = [0, 1, 2, 3, 4, 5];
const myArr2 = ["abc", "xyz"];
//using new keyword
const myArr3 = new Array(1, 2, 3, 4);

/*array methods*/

//push() : add new elements or value to the array
myArr.push(6);
console.log(myArr);

//pop() : removes the last element of the array(no argument is required)
myArr.pop();
console.log(myArr);

//unshift() : insert the value at the starting of the array i.e. at 0th index
//          : complicated to use as it shifts the position of every elemnt in the array
//          : NOT OPTIMIZED WAY
myArr.unshift(9);
console.log(myArr);

//shift() : removes first elemnt from the array at 0th index.
myArr.shift();
console.log(myArr);

//includes() : checks if thaat value is included in it or not.
console.log(myArr.includes(9));//false

//indexOf() : checks the index for value
//          : if value present gives the value of index else -1.
console.log(myArr.indexOf(3));
console.log(myArr.indexOf(19));

//join() : binds the element and change the data type to string
/*console.log(myArr.join());*/

//slice() : select index from start to end where end is not included.
console.log(myArr);
console.log("A ", myArr);
const myn1 = myArr.slice(1,3);
console.log(myn1);

//splice() : select index from start to end where end is included and changes the original array remove the splice values
console.log("B ", myArr);
const myn2 = myArr.splice(1,3);
console.log(myn2);
console.log("C ", myArr);