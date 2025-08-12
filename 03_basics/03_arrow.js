//////////////**************THIS AND ARROW FUNCTION *//////////////////


//THIS keyword tells about the current context.
//1)making a basic object

const user = {
    username: "fariha" ,
    price: 999,

    welcomeMessage : function() {
        console.log(`${this.username} , welcome to website`); //to access the variables of this scope we used this function.
        console.log(this);
    }

}

//user.welcomeMessage()          //fariha , welcome to website
//user.username = "sam"
//user.welcomeMessage()          //sam , welcome to website
console.log(this);                 //{}-------empty object

/////##############OUTPUT of the above after using this command###########

//fariha , welcome to website
//{
//  username: 'fariha',     //after using console.log(this); inside the function
//  price: 999,
//  welcomeMessage: [Function: welcomeMessage]
//}
//sam , welcome to website
//{
//  username: 'sam',        //after usin console.log(this) after user changed to sam
//  price: 999,
//  welcomeMessage: [Function: welcomeMessage]
//}
//{}----------------------//after usin console.log(this) outside the scope acting globally

//function chai(){                //op will come as some global values and micro tasks sucha as global: [Circular *1],
    //let username ="fariha"                         //clearImmediate: [Function: clearImmediate],
   // console.log(this);                            //setImmediate: [Function: setImmediate] 
// console.log(this.username);    //op:- op will come as undefined
 //}

//chai()

//###2nd way

//const chai = function() {
//let username ="fariha"                      
// console.log(this.username);     ///result--undefined
// }

//chai()

//###3rd way

//const chai = () => {     ///function keyword removed and v can take the parameters under()
//    let username = "fariha"     //  => arrow function
//    console.log(this.username);///result-----undefined
//    console.log(this);// result ---empty  set{},windows,global variable
//}

//chai()

///#####Implementiing arrow function() => {}

  //  const addTwo = (num1,num2) => {
   //     return num1 + num2
    //}

   // addTwo()
   // console.log(addTwo(3,4)) // result:-7

///IMplicit return technique in arrow => it means we dont need to use parenthesis()
///(implicit return means mn maanlete hun  lkn aapko parenthesis ya curly braces lgane ki zrrt nhn h)


//const addTwo = (num1, num2) =>  return num1 + num2   // { removed the bracket that used to be here in this technique
// const addTwo = (num1, num2) =>  num1 + num2 //we remove the return function from here"as it states that  implicit means mn maanleta hun ,,,lkn aapko return likhne ki zrrt nhn h mn drct operation perform krne k  liye statement likhdunga   
  //    const addTwo = (num1, num2) =>  (num1 + num2) //we can write  as (num1+num2) by including paranthesis as well ,but if we used {} we need to write return function                                       //as we have only a single line statement so we need not write return   
  // } removed the braces that used to be at this place

  //###to return an object
   const addTwo = (num1, num2) => ({username:"fariha"}) // to return an object we need to include the curly braces within the paranthesis then only we will get the desired output as -----{ username: 'fariha' } otherwise we will get as undefined 
  console.log(addTwo(3, 4))// same op----7 as the   techniques mentioned above

///##### ways of writing(SYNTAX) Arrow function in a loop

const myArray = [2 , 5, 7, 9, 0]

//myArray.forEach(function() {})

//myArray.forEach(() => {})

//myArray.forEach(() => ())
