const name = "fariha"
const repoCount = 50

console.log(name + repoCount +"Value");// dont use this way

//String_interpolation

console.log('Hello my name is ${name} and my repo count is ${repoCount}');

const gameName = new String('fariha-z')

//console.log(gameName[0]);
//console.log(gameName.__proto__);

//console.log(gameName.length);
//console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('r'));

const newString = gameName.substring(0, 4)
  //stored in a variable named newString and we want to divide it in subString
console.log(newString);

const anotherString = gameName.slice(-8, 4)
console.log(anotherString);

const newStringOne = "    fariha    "
console.log(newStringOne);
console.log(newStringOne.trim()); ///trims the extra spaces from the string and only provide what is necessary;read from mdn documentation 

const url = "https://fariha.com/fariha%20zaheer"

console.log(url.replace('%20', '-')) //to replace %20 with -

console.log(url.includes('sundar'))

console.log(gameName.split('-'));//read from mdn split

