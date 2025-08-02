//1)Primitive datatypes 

//are called by value-i.e reference of original data that where is it stored
// in memory is not given but are provided by copying and the changes are made in copy.
// 7 types  : String,Number,Boolean,Null,undefined,Symbol(kisi bhi value ko unique bnane k liye symbol ka use jkra jata h),BigInt(Scientific vales or larger values)


const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null //(means completely empty)
let userEmail; //means its undefined since value is not declared//

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);//(same values but not same due to symbol represntation)

const bigNumber = 3456543576654356754n


//2)Reference or Non-Primitive datatypes
// reference is allocated in the memory
// Arrays,Objects,Functions
//datatype of all the non primitive comes out to be as Object of all the categories be it array,object or function// 

const heros = ["america","black widow","loki"];//array//
let myObj = {
    name: "fariha",
    age:22,
}                //let myObj used to declare in a variable we can use just curly braces as well//
 

function(){

}       //function can be represtnted like this //

//also function can be declared as a variable like given below//

const myFunction = function(){
    console.log("Hello world");
}                             //datatype of myFunction comes to be function but is called as Object function or function object//
console.log(typeof bigNumber);// to know the type of datatype 
console.log(typeof outsideTemp);//datatype comes to be as object(object is the operator result of NULL)
console.log(typeof anotherId);

/**javascript dynamically typed language */

//read from ecmascript about datatypes//