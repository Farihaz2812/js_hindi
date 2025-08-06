// date object -dates usually declared in miliseconds// 
//from january 1 ,1970

let myDate = new Date()
//console.log(myDate.toString());//Wed Aug 06 2025 16:21:16 GMT+0000 (Coordinated Universal Time)
//console.log(myDate.toDateString());//Wed Aug 06 2025
//console.log(myDate.toISOString());//2025-08-06T16:21:16.769Z
//console.log(myDate.toJSON());//2025-08-06T16:21:16.769Z
//console.log(myDate.toLocaleString());//8/6/2025, 4:21:16 PM
//console.log(myDate.toTimeString());//16:21:16 GMT+0000 (Coordinated Universal Time)
//console.log(myDate.getSeconds()); //16
//console.log(typeof myDate); //its an object

//if you eant to write a specific date

//let myCreatedDate = new Date(2025,0,23) //arbitrary date//moths are started by 0 in js
//let myCreatedDate = new Date("2023-02-14")//(YY-MM-DD)Format
let myCreatedDate = new Date("02-14-2023")//(MM-DD-YY)Format
//console.log(myCreatedDate);//2025-01-23T00:00:00.000Z
//console.log(myCreatedDate.toDateString());//Thu Jan 23 2025


let myTimeStamp = Date.now()

//DO COMPARISON OF TWO DAYS ALWAYS IN MILISECONDS//

//console.log(myTimeStamp);//1754498676995(Time in milisec since 1970)
//console.log(myCreatedDate.getTime());//1676332800000(time in milisec of present time or of the given date since 1970)

console.log(Math.floor(Date.now()/1000)); //op-1754499357//-divided by 1000 in order to change into seconds from milisecons
//use always (Math.floor) or (Math.round) not math.ceil always while converting into seconds from mili seconds;

let newDate = new Date()
console.log(newDate);//2025-08-06T18:31:02.938Z
console.log(newDate.getMonth() + 1);// 8
console.log(newDate.getDay()); // 3

// '${newDate.getDay() and the time}

newDate.toLocaleString('default',{
    weekday: "long"

})
console.log(newDate.toLocaleString);

