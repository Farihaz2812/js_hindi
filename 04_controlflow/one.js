//if statement
//if(condition) {

    //if condition = true then code will be executed 
    //inside the scope or {}and if false then not,we will not go  inside the condition
//}

const isUserloggedIn = true;
const temperature = 41;

//if(isUserloggedIn){
//if( 2 == "2" ){
//####################

//if ( temperature < 50 )
//  if( temperature === 40){ ////less than 50
//    console.log("less than 50");//less than 50
//} else {

//console.log("temperature is greater than 50"); // temperature is greater than 50
//}

//console.log("Execute");

//#################################


//2<=2
//3 !=2
//
//2 == "2"
// <, >, <= , >=, ==, !=, ===

//##################################

//const score = 200

//if (score > 100) {
//    const power ="fly"//if use var  power ="fly"then its op will com eout to be as USer power:fly,as scope of var is global
//    console.log(`User power: ${power}`);//User power: fly
//}

//console.log(`User power: ${power}`);

//##############################

//const balance = 1000

////////if(balance > 500) console.log("test");//#implicit scope is used which means we have contradicted that here scope exists
////////if (balance >500) console.log("test"),console.log("test2"); suggested not to use this way of writing code


//  if(balance < 500) {
//     console.log("less than 500");
// }  else if (balance < 750) {
//     console.log("less than 750");
// }  else if (balance < 900) {
//     console.log("less than 750");

// } else {
//     console.log("less than 1200");//op-less than 1200
// }

///#########################################

const userloggedIn = true
const debitCard = true
const loggedInFromGoogle = false
const loggedInfromEmail = true

if (userloggedIn && debitCard && 2==3) {
    console.log("Allow to buy course");
}

if(loggedInFromGoogle
