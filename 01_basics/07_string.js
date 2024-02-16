//for concatenation
const name = "Hello"
const num =  20;
console.log(name + num + " Value"); //not recommended to use

//String Intercolation : we use backticks(``) and make placeholders and inject the variable we wish to use
console.log(`${name}, goodMorning! I'm ${num}`);
console.log(`${name.toUpperCase()}, goodMorning! I'm ${num}`);

// to declare a string - another way using a n object constuctor
const gameName = new String ('distaliffy')
/*we used a new keyword with an object of javascript(i.e. String) and gave name inside the constructor of the string.*/
console.log(gameName);
//to access key-value pair
console.log(gameName[0]);//d
//to access prototype method - gives object
console.log(gameName.__proto__);//{}
//any method can be accessed: we can see in console window in chrome by this console.log(gameName);
console.log(gameName.length);
console.log(gameName.toLowerCase());
//to check what character is at the given index
console.log(gameName.charAt(3));
console.log(gameName.charAt(12));//null
//to check character is at what position
console.log(gameName.indexOf('t'));


//.substring() method: ignores teh negative value
const newString = gameName.substring(0,4);//(start, end)
console.log(newString);//dist(0 is included, but 4 index or position is not included)

//.slice() method: we can negative values too, it will start from reverse
console.log(gameName.slice(-8,4));//st
console.log(gameName.slice(-10,4));//dist

//.trim() method: to remove extra spaces
const newStringOne = "     hello     ";
console.log(newStringOne);//hello with extra spaces
console.log(newStringOne.trim());//hello without extra spaces

//.replace() method: replace the value
const url = "https://abc.com/welcome%20world";//(instead of spaces %20 is used in a url)
console.log(url.replace("%20", "-"));//(search value, the value to be replaced)

//.includes()method: to check if that keyword is present or not
console.log(url.includes('welcome'));
console.log(url.includes('twenty'));

//.split() method: to convert string into array based on -, spaces or anything
const newStringTwo = "hello-hello-hello";
console.log(newStringTwo.split('-'));//(on what basis we want to split in brackets)

