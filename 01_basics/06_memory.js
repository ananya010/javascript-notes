//types of memory : Stack, Heap
//Stack: primitive type used
//     : copy of variable declared
//Heap: non-primitive type used
//    : reference of original value

//example of stack

let userName = "faraz";
let anotherName = userName;
anotherName = "basanti";
console.log(anotherName);//basanti
console.log(userName);//faraz

//example of heap

let userOne = {
    email: "abc1@xyz.com",
    upi: "def@qwe"
};

let userTwo = userOne;
userTwo.email = "abc2@xyz.com";
console.log(userTwo.email);
console.log(userOne.email);

