//array
const myArr =[0,1,2,3,4,5,true,"fariha"]//array in []always//no prob even if u write a boolean or string and no. altogether it will still be an array i.e a mix of datatypes
                                          //0,1,2,3,4,5,true,fariha are called elements.//arrays in js resizable that is can be changed whenever want to
const myHeros = ["thor","black widow"]

const myArr2 = new Array(1,2,3,4)
//console.log(myArr[6]);//op:-true //arr always accessed in indexing as indexing starts from 0 and also not "" included                                        

//ARRAY METHODS//

//myArr.push(8)  //New elem to add to array
//myArr.push(7)  
//myArr.pop() //will pop the last elem of array,no need to insert index no.
//console.log(myArr);//op:-[ 0, 1, 2, 3, 4, 5, true, 'fariha', 8 ,7]

//myArr.unshift(9)    //unshift will add the value at the  0th index//
//myArr.shift()  //[ 0, 1, 2, 3, 4, 5, true, 'fariha' ]removed the value 9 which was inserted at the 0th index by using unshift
//console.log(myArr);//[ 9, 0, 1, 2, 3, 4, 5, true, 'fariha' ] 


//myArr.shift()
//console.log(myArr);//[ 1, 2, 3, 4, 5, true, 'fariha' ]//remove the first element i.e 0

//console.log(myArr.includes(9));//op:-false//"includes"is used to ask whether a value is there 
                                //in the array or not,and gives u the o/p in boolean i.e true or false.
//console.log(myArr.indexOf(9));  //op:-(-1)
//console.log(myArr.indexOf(3));   //op:-(3) 

 const newArr = myArr.join()

 console.log(myArr); //[ 0, 1, 2, 3, 4, 5, true, 'fariha' ]
 console.log(newArr);//0,1,2,3,4,5,true,fariha  // the type of array has changed using join.join has bind the array and also converted it into string.
//console.log(typeof newArr);//op:-String

//slice, splice

console.log("A ", myArr);//op:-A  [ 0, 1, 2, 3, 4, 5, true, 'fariha' ]

const myn1 = myArr.slice(1,3)

console.log(myn1);//op:-[ 1, 2 ]
console.log("B ",myArr);//op:- B  [ 0, 1, 2, 3, 4, 5, true, 'fariha' ]ce(1, 3)
console.log("C ", myArr);//op:- C  [ 0, 4, 5, true, 'fariha' ]
console.log(myn2);//:- [ 1, 2, 3 ]