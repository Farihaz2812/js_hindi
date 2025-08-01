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
//console.log(stringNumber);
//console.log(typeof stringNumber);


//****************Operations******************************* */

let value = 3
let negValue = -value
//console.log(negValue);

//console.log(2+2);
//console.log(2-2);
//console.log(2*2);
//console.log(2**3);
//console.log(2/3);
//console.log(2%3);

let str1 = "Hello"
let str2 =  "Fariha"

let str3 = str1 + str2
//console.log(str3);

//console.log("1"+ 2);
//console.log(1 + "2");
//console.log("1" + 2 + 2);//if string in beginnining then it will be written as 122

//console.log(1 + 2 + "2");//if string at last then it will perform operation first such as it will add 1+2 =3 and then write string with it, 32//
//console.log( (3 + 4) * 5 % 3);

//console.log(true);// will give you an output  as true
//console.log(+true);// will give you an output as 1 since its already boolean
//console.log(true+);// will give you an output as error since anything like true+ doesnt exist in js.
//console.log(+"");// should not write like this as well

let num1,num2,num3

num1 = num2 = num3 = 2+2

let gameCounter =100
gameCounter++;// output will be 101 
console.log(gameCounter);//see precedence of the prefix operator and postfix operator from mdn

//link to study :  mdn and ecmascript for description in documentation




