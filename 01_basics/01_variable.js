const accountId ="122234"
let accountEmail ="Farihaz@gmail.com"
var accountPassword = "23456"
accountCity ="Delhi"
let accountState;
// if we have not assigned a value to a variable name  such as 
// in the  above mentioned like account state then js will determine the value as undefined.

// accountID = 2 // not allowed

accountEmail ="far@far.com"
accountPassword ="02345"
accountCity ="Hyderabad"

 console.log(accountId);// its up to us that we want to use ; or not//
 
 /*
 prefer not to use var because of issue 
 in block scope and functional scope, also we can declare a variable name without using any  predecessor before  variable name we can reserve a place in its memory space*/

 console.table([accountId, accountEmail, accountPassword, accountCity])