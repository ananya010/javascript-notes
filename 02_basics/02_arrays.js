const flowers = ["lily", "daisy", "tulip"]
const seeds = ["flower", "fruit", "seed"]
// flowers.push(seeds);
// console.log(flowers);// the array pushed is considered as a single element
// console.log(flowers.length);//4
// console.log(flowers[3]);
// console.log(flowers[3][1]);

/* .push() add to existing array whereas .concat() add to new array*/

const all = flowers.concat(seeds);
console.log(all);

//spread operator[..., ...] : preferd more to concatenate elemnts
const all_new = [...flowers, ...seeds]
console.log(all_new);

// .flat() method : returns a new array with all sub-array elements concatenated upto maximau depth
const an_array = [1,2,3,[6,7], 4, [6,7,[3,4]]];
console.log(an_array.flat(Infinity));

// .isArray() : to check if the following is an array or not
console.log(Array.isArray("Hello"));//false

// .from() : to convert into array
console.log(Array.from("Hello"));

//object cannot be converted directly into array using from method, but it can be made from all value or all keys
console.log(Array.from({name: "abc"}));//[]

// .of() : returns a new array from a set of 
let score1 = 100;
let score2 = 200;
let score3 = 300;
console.log(Array.of(score1, score2, score3));