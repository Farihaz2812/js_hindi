const score =400
console.log(score);

const balance =  new Number(100)
console.log(balance);

console.log(balance.toString().length);
console.log(balance.toFixed(1));

const otherNumber = 1223.89
console.log(otherNumber.toPrecision(5));

const otherNumber2 =24.95
console.log(otherNumber2.toPrecision(4));

const hundreds = 1000000
console.log(hundreds.toLocaleString('en-IN'));

//+++++++++++++++++++++  MATHS  +++++++++++++++++++++++++++++//

//console.log(Math);
//console.log(Math.abs(-4));
//console.log(Math.round(4.3));
//console.log(Math.ceil(4.2));
//console.log(Math.floor(4.2));
//console.log(Math.max(4, 3 , 1 , 5));

console.log(Math.random());
console.log(Math.random()*10 + 1);//when multiplied by 10 bvalues shifted to left but for ex-value came out to 
//to be 0.1 so math floor willl give u value as 0,so to avoid in that case we added 1 here
//bcz our min case is that we need value min as 1 and max can be any above 1 so it willngive us values b/w 1-9
console.log(Math.floor(Math.random()*10)+ 1);

const min = 10//sometimes we are asked to define min and max so in that case we used math.random and instead of drctly multiplying by 10
//we didi (max-min)  so that hmare pass voh range aajayen ki is range k andar chahiye mjhe or +1 krnwe k liye taaaki voh 0 case add krskun)
// so the value is coming the same which came in above lines of code so to avoid in that case we added a (min) value again
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1)))
//math.random-gives values b/w 0 and 1
