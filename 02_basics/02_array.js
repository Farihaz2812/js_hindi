const marvel_heros = ["thor","Ironman" , "spiderman"]
const dc_heros = ["superman", "flash","batman"]

//marvel_heros.push(dc_heros)

//console.log(marvel_heros);//op:-[ 'thor', 'Ironman', 'spiderman', [ 'superman', 'flash', 'batman' ] ]

//const allHeros = marvel_heros.concat(dc_heros)
//console.log(allHeros);//op:-[ 'thor', 'Ironman', 'spiderman', 'superman', 'flash', 'batman' ]

const all_new_heros = [...marvel_heros,...dc_heros]

console.log(all_new_heros);//[ 'thor', 'Ironman', 'spiderman', 'superman', 'flash', 'batman' ]

const another_array = [1,2,3, [4,5,6], 7, [6,7,[4,5]]]   //op:-  1, 2, 3, 4, 5,
                                                                 6, 7, 6, 7, 4,
                                                                 5

const real_another_array = another_array.flat(Infinity)
console.log(real_another_array);

//used while web scraping as usually data comes in nodelist form or object form or string form bur we want in the form of array so we use underlying commands-

//we can even ask and convert into array as well.

console.log(Array.isArray("fariha"))//-----false("isArray" to ask whether the format is in Array form or not)
console.log(Array.from("fariha"))//-----[ 'f', 'a', 'r', 'i', 'h', 'a' ] (and "from" used so as to convert a string or the provided form into an array)
console.log(Array.from({name: "fariha"})) /// will give you an empty array as it is not able to make array out of it.As it is not able to directly convert it.as we need to command it that do we need to make array of keys or values or  if not able to make then op:-[])

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3))//-[ 100, 200, 300 ]