let score =" 33abc "; //(number) and if written as "33" then its a string
//console.log(typeof score);
//console.log(typeof(score));//(score) written under parenthesis as we are writing it as a method


let valueInNumber = Number(score)
//console.log(typeof valueInNumber);
//console.log( valueInNumber)


//value 33abc converted as it is a string there and gives output NaN //
//if let suppose we have value for let score = Null and then we are asked the value in number then value comes out to be 0//
//if let suppose let score = undefined,then again on conversion output comes out to be NaN
//if entered let score= true that is a boolean value then the output will come as 1;if false then 0,
// if string let score ="fariha" then again the output comes out to be NaN.
//"33" => 33
//" 33abc" => NaN(Not a Number)
//true=> 1;false=> 0

let isLoggedIn = 1

let booleanIsLoggedIn = Boolean(isLoggedIn)
//console.log(booleanIsLoggedIn);

// 1 => true; 0=>false
//""=>false;
//"fariha"=>true;

let someNumber = 33

let stringNumber = String(someNumber)
console.log(stringNumber);
console.log(typeof stringNumber);
