//Immediately Invoked Function Expressions(IIFE)

//sometimes we get into a problem because of global scope's pollution
//so the variables or declarations of global scope which are there.so to remove them 
//we use IIFI
//IIFI can also be called as a function which executes immediately

//SYNTAX-1

(function chai(){
    // //named IIFI
    console.log('DB CONNECTED'); //DB CONNECTED
})();        ///here ; is used to end the code so that it can be executed otherwise the code or function doesnt know where to stop.

//SYNTAX-2

( () => {
    //simple IIFI
    console.log(`DB CONNECTED TO`);// DB CONNECTED TO
} ) (); //---()executing function which is at the end

//SYNTAX-3

( function coffee(){
    //named IIFI
    console.log(`feriha`); //feriha
}) ();

//SYNTAX-4

( (name)  => {
    //Unnamed IIFI //'name'  is passed as a perimeter here
    console.log('DB CONNECTED TWO ${name}');
}) ('fariha')