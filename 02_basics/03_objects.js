//two ways to declare an object 1) constructor 2) literal
//when by constructor called singleton
//when by literal multiple instances are created.
//Object.create({})//creating an empty object by constructor

//object literal

//const JsUser ={}//creating an empty object by literal

//declaring a symbol

const mySym = Symbol("key")//[mySim] brackets used so as to write as a symbol otherwise it would represent as a string.

const JsUser = {
    name: "fariha",//values can be of anytype string,boolean etc.
    "full name": "fariha khan",//if key has space then it should be in quotes
    [mySym]: "myKey1",//[] so as to write as a symbol otherwise it would represent as a string.
    age: 20,
    location: "Aligarh",
    email: "fariha@gmail.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday","Saturday"]


}

//objects ki values ko . notation ya [] notation se access kar sakte hain.
console.log(JsUser) //accessing the whole object
console.log(JsUser.name)//accessing the value of key name through . method
console.log(JsUser["name"]) //accessing the value of key name through [] method
console.log(JsUser.age)//accessing the value of key age through . method
console.log(JsUser["age"]) //accessing the value of key age through [] method
console.log(JsUser.email)  //accessing the value of key email through . method
console.log(JsUser["email"]) //accessing the value of key full name through [] method with quotes as it has space in key name
console.log(JsUser["full name"])//accessing the value of key full name through [] method with quotes as it has space in key name
console.log(JsUser[mySym]) //accessing the value of key mySym through . method

JsUser.email = "farihazaa2913@gmail.com" //updating the value of key email or so as to change or over write prior email 
//Object.freeze(JsUser)  //freezing the object so that it cannot be changed further
JsUser.email = "fariha@microsoft.com" //this will not change the value of email as we have frozen the object
console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello JS user");
}
JsUser.greetingTwo = function(){
    console.log('Hello JS user, ${this.name}');
}

//console.log(JsUser.greeting);//accessing the function greeting through . method and gives an op as undefined
console.log(JsUser.greeting());//shows JsUser.greeting is not a function
 //so as to get the desired output we need to remove the freeze command sas to get the output given below
 //op:-after removing freeze command get op as "Hello JS user"
 console.log(JsUser.greeting);// gives op:-[Function (anonymous)]
 console.log(JsUser.greetingTwo());

 //NOTE:-
// 1) Objects are mutable, meaning we can change their properties and values.
// 2) Objects can contain functions, which are called methods when they are part of an object
// 3) Objects can be nested, meaning an object can contain other objects.
// 4) Objects can be iterated over using for...in loops or Object.keys(), Object.values(), and Object.entries() methods.
// 5) Objects can be frozen using Object.freeze() to prevent any changes to their properties and values.
// 6) Objects can be cloned using Object.assign() or the spread operator (...).
// 7) Objects can be compared using JSON.stringify() to convert them to a string representation, but this method does not work for functions or symbols.
// 8) Objects can be destructured to extract values into variables, making it easier to work with specific properties.
// 9) Objects can be used as maps, where keys can be any data type, but they are typically strings or symbols.
//10) Objects can be used to create classes and prototypes in JavaScript, allowing for inheritance and shared methods.
//11) Objects can be serialized to JSON format using JSON.stringify() and deserialized back to an object using JSON.parse().
//12) Objects can have getters and setters, allowing for controlled access and modification of properties.
//13) Objects can be used to implement design patterns like the Singleton, Factory, and Module patterns.
//14) Objects can be used to create namespaces, helping to avoid naming conflicts in larger applications.
//15) Objects can be used to store configuration settings, making it easier to manage application settings in a structured way.
//16) Objects can be used to represent real-world entities, making it easier to model complex data structures in applications.   
///

////important:- use . method to access the object mostly
// use [] method when key has space or is a symbol or when key is dynamic
// use [] method when you want to access the key dynamically or when key is a symbol
// use [] method when you want to access the key with a variable
// use [] method when you want to access the key with a string that has special characters or spaces
// use [] method when you want to access the key with a string that is not a valid identifier
// use [] method when you want to access the key with a string that is not a valid JavaScript identifier
// use [] method when you want to access the key with a string

//use[] only when u dont have another option like in symbols 