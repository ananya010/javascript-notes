//go to file>terminal>new terminal> $ node 01_basics(folder_name)/01_variables.js(file_name)
const accountId = 194701
let accountEmail = "abc@gmail.com"
var accountPassword = "12345"
accountCity = "Jaipur"
let accountState;//js consider it as undefined value

//accountId=2 not allows as const keyword cannot change its value
accountEmail = "ab@ab.com"
accountPassword = "21212121"
accountCity = "Bengaluru"

/*
prefer not to use var 
because of issue in block scope and functional scope
*/


console.log(accountId)
//to print output in table
console.table([accountId, accountEmail, accountPassword, accountCity, accountState])