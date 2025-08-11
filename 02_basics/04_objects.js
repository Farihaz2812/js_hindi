//const tinderUser = new Object() //this is a singleton object and while declaring we receive the same op as{} as while declaring the below line.
const tinderUser = {} //this is a literal object and while declaring we receive the same op as new Object() as above line
 
//both the above lines are same and we can use any of them to declare an object.
tinderUser.id = "123abc" //adding a key id to the object tinderUser
tinderUser.name = "Fariha Khan" //adding a key name to the object
tinderUser.isLoggedin = false //adding a key isLoggedin to the object

//console.log(tinderUser); //gives an empty object as output

const instaUser = {
    email: "fariha@gmail.com",
    fullname: {
      usefullname :{
        firstname:"fariha",
        lastname: "khan"
      }

     }
 }

console.log(instaUser.fullname.usefullname.firstname); //fariha

const obj1= {1:"a",2:"b"}
const obj2= {3:"a",4:"b"}

//const obj3 ={obj1,obj2}// { obj1: { '1': 'a', '2': 'b' }, obj2: { '3': 'a', '4': 'b' } }
//const obj3 = Object.assign(obj1, obj2)//{ '1': 'a', '2': 'b', '3': 'a', '4': 'b' }
//const obj3 = Object.assign({},obj1,obj2)//{ '1': 'a', '2': 'b', '3': 'a', '4': 'b' } // {} ----empty array taken so that it may be posssible that u might be having more than two objects, as while usin g object assign we have two things source and target
                                                                                    // used so as to give an accurate result that if you are gonna use this you will surely be getting a console.log(obj3);
  
  const obj3 = {...obj1,...obj2}     //used spread operator as it is easy ,same concept as array
  console.log(obj3);    //Object.assign({},obj1,obj2,obj4);here {} treated as source and rest three treated as object

const users = [
    {
        id:1,
        name:"fariha",
        email:"f@gmail.com",
        isLoggedIn: false,
    },

    {
        id:2,
        name:"Zaheer",
        email:"Z@gmail.com",
        isLoggedIn: false,
    }

]
users[1].email //accessing the email of second user in the array
users[0].name //accessing the name of first user in the array
//console.log(instaUser);
//console.log(tinderUser);

//console.log(Object.keys(tinderUser)); //gives an array of keys in the object tinderUser //[ 'id', 'name', 'isLoggedin' ]gives an array datatype, now we can use apply loop on the keys  
//console.log(Object.values(tinderUser)); //gives an array of values in the object tinderUser//[ '123abc', 'Fariha Khan', false ]
//console.log(Object.entries(tinderUser)); //gives an array of key-value pairs in object// 
                                         // [ 'id', '123abc' ],            
                                         // [ 'name', 'Fariha Khan' ],
                                         //[ 'isLoggedin', false ]


//console.log(Object.keys(instaUser));//[ 'email', 'fullname' ] //gives an array of keys in the object instaUser
//console.log(Object.values(instaUser));//[ 'fariha@gmail.com//                                      { usefullname: { firstname: 'fariha', lastname: 'khan' } }
                                        //gives an array of values in the object instaUser
//console.log(Object.entries(instaUser));//[ 'email', 'fariha@gmail.com' ],
                                       // [ 'fullname', { usefullname: [Object] } ] //gives an array of key-value pairs in

//console.log(tinderUser.hasOwnProperty("id")); //true//checks if the key id exists in the object tinderUser and returns true or false`
//console.log(tinderUser.hasOwnProperty("age")); //false//checks if the key age exists in the object tinderUser and returns true or false, here it will return false as there is no key age in the object tinderUser
//console.log(tinderUser.hasOwnProperty("name"));//true //checks if the key name exists in the object tinderUser and returns true or false, here it will return true as there is key name


const course = {
   coursename: "js in hindi",
   price: "999",
   courseInstructor: "fariha"
}

//course.courseInstructor

const {courseInstructor :instructor} = course //destructuring the object course to get the value of key courseInstructor
                                              //here we are renaming the key courseInstructor to instructor
                                              // 
console.log(courseInstructor); //fariha //printing the value of courseInstructor which is fariha                                                                                                                                                           
console.log(instructor); //fariha //printing the value of instructor which is fariha

//APIs IN JS
//APIs are used to fetch data from the server or to send data to the server
//APIs in JS are used to interact with the server and to perform various operations like fetching data, sending data, updating data, deleting data, etc.
//APIs are used to interact with the server and to perform various operations like fetching data,


//APIS in the form of objects( strings) are written with " "
//{
 //     "name" :"fariha",
//       "coursename":"js 
//       "price": "free"
//}
//APIs in the form of objects are written with arrays (array jisk andar object hai)
//
[ 
  {},
  {},
  {}
]
