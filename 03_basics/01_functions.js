// Function declaration

function MyName(){
    console.log("F");
    console.log("A");
    console.log("R");
    console.log("I");
    console.log("H");
    console.log("A");

}

MyName() // Calling the function()

// Function to add two numbers
//Way 1: Using console.log to print the result directly

//Function addTwoNumbers(num1,num2){ // here num1 and num2 are parameters
//    console.log(num1 + num2);
//}

//addTwoNumbers(3,4); // Calling the function with arguments 3 and 4
//addTwoNumbers(10,"4");//op-104 athe js thought 10 is also a string as 4 is
//addTwoNumbers(3,null); //op-3 as null is treated as 0
//addTwoNumbers(3,undefined); //op-NaN as undefined is not a number

//Way 2: Using return statement to return the result

//function addTwoNumbers(num1,num2){ // here num1 and num2 are parameters
    
    //let result = num1 + num2(This result is declared inside the function AddTwoNumbers)
   // return result
    //console.log ("This will not run because of return statement as anything before return function can be printed but not after writing it");
 //}

 //Way 3: Using return statement to return the result and storing it in a variable
function addTwoNumbers(num1, num2) { // here num1 and num2 are parameters
    return num1 + num2; // Returning the sum of num1 and num2
}

//const result = addTwoNumbers(3,5)//This Result is declared outside function (way 2) both are different things.

//console.log("Result:", result);//Result: 8

//# Function to log a message when a user logs in

function loginUserMessage(username){
    return `${username} just logged in` // Using template literals for string interpolation
}

//console.log(loginUserMessage()) //If no value  is provided in loginUserMessage then it will show op as "undefined just logged in"
console.log(loginUserMessage("fariha")); // Output: Fariha just logged in

//#Another Way to handle undefined username

function loginUserMessage(username){ // (username = "sam")// This is a default parameter, if no value is passed, it will default to "sam" and print as "sam just logged in"
    if (username === undefined) {// Check if username is undefined because we will enter the block below only when the username is defined and not undefined bcz undefined is false and we only visit when value is true
                                // we can also use if(!username),this means reciprocate the username which was undefined so that now it would look as defined, to check for both undefined and empty string
        console.log("Please enter a Username");
        return; // Exit the function if username is not provided
                //and also if we don't want to return the "just logged in" message
    }
    return `${username} just logged in` // Use backticks for template literals
}
console.log(loginUserMessage())// Please enter a Username
                               //undefined
//console.log(loginUserMessage("fariha")) // Fariha just logged in  will overwrite sam just logged in if VAlue "fariha" is passed and if not then sam just logged in will be printed
///###/()empty string is let to be taken as false value same ways undefined is also defined as a false value

//### how  is rest(...) operator and spread operator is used to pass a lot of values altogether , both spread and rest looks same but depend on their usecase, different(...),spread is used to add all the values  provided or writing collectively

//### How is rest operator(...) passed in a function

//prob 1
//function calculateCartPrice(num1, num2, num3, num4, num5){

function calculateCartPrice(...num1){
    return num1
}

console.log(calculateCartPrice(100,200,300,4000,500))//op:-[ 100, 200, 300, 4000, 500 ]

//prob 2

function calculateCartPrice(val1,val2, ...num1){
    return num1

}
console.log(calculateCartPrice(100,200,300,4000,500))//op:-[ 300, 4000, 500 ] , here val1(100) and val2(200) are not included in the output as they are not part of the rest operator and the remaining values are moved to num1 array (300, 4000, 500) 


//### how object is passed in a function

// prob 1
