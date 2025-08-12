let a=10
const b =20
var c = 30

console.log(a);// Output: 10
console.log(b);// Output: 20
console.log(c);// Output: 30

////{}-----called as scope.Two types of scope: global and local
// Global scope: Variables declared outside of any function or block//
// Local scope: Variables declared inside a function or block//
//{}----when comes with any function or if else then called scope.With object it is called object literal and not scope.

//# Function to demonstrate scope

var c = 300 //here value put outside or 
//            the block scope is called as global scope

if(true) { // This block creates a local scope//
    let a=10  //the value put in this block is called as local scope  or in if else statement or in loop
    const b =20
    var c = 30 ///avoid usage of var as it is function scoped and not block scoped, so it will be accessible outside this block
  // The value in global scope is already there in block scope
  //but the value in block scope is not accessible outside this block and should not be leaked outside 
}

//console.log(a);// 
//console.log(b);// 
console.log(c);//

//var c = 300
let a2 = 300
if(true) {
    let a2 =2
    const b =4
    console.log("INNER:", a2);   //INNER: 2--block space
    }

console.log(a2);// 300----lobal scope

//###anything in the global scope can be acccessed in  block space but not vice versa.
//###scope in these coding spaces is different from scope in inspect console window both are different things


///###NESTED SCOPE

function one(){
    const username = "fariha"  
         
    function two(){           //function two nested within function one
        const website ="youtube"      //all the variable declared in this block are till this block only and not accessible outside two.
        console.log(username);  //fariha    //block variable can access the elements of global variable bur global cannot.

    }
    
    //##child function can access parent function
    // console.log(website);//as it is outside the block scope{} of two so we cannot console website as it can only be accessed within the two block

    two() //won't be executed if not called and only one will be executed as it is only called

}

one()


//#####Through IF-ELSE statement

if (true) {
    const username = "fariha"
    if(username === "fariha") {
        const website = " yahoo"
        console.log(username + website); //fariha yahoo
        console.log(username);//fariha
    }
    ////console.log(website); //op-website notdefined since this is asked outside the block space 
}

//console.log(username);//op-Username not defined sinceit is asked outside the local space.


//## 1st way to write a function

console.log(addOne(5))

function addOne(num){ //only declaration is given here
      return num + 1
}                        //op:-6


//## 2nd way to write a function(SYNTAX)

addTwo(5)   //here we are accessing a function before its declaration so it will not give an op and instead give an error          
const addTwo = function(num){  //with declaration we have also hold in a variable
    return num + 2
}                     ///op:-Cannot access 'addTwo' before initialization