let x = 1;
const y ="2";

console.log(x,y);

//Format Specifier:

// %s format variable to a string
// %d format variable to a number
// %i format variable to a integer
// %o format variable to a object

console.log("Hello I am %s and mah age is %d", "Joshi", 19);
// console.clear(); //Will clear the console....
console.count("I am Joshi") // counts...
console.count("I am Joshi")
console.count("I am !Joshi")
console.countReset("I am Joshi"); // Resets the count
console.count("I am Joshi")

const function1 = () => console.trace(); //Stack Trace...
const function2 = () => function1();

function2();


const sum = () => console.log("The Sum of 2 and 3 is %i", 2+3);
const multiply = () => console.log("The Multiplication of 2 and 3 is %i", 2*3);

const measureTime = () =>{
    console.time("sum()");
    sum();
    console.timeEnd("sum()")
    console.time("multiply()");
    multiply();
    console.timeEnd("multiply()")
}
measureTime();

//npm i progress chalk@4
// MAKING PROGRESS-BAR
const progressBar = require("progress");
const chalk = require("chalk");
const bar = new progressBar("downloading [:bar] :rate/bps :percent :etas", {
    total:20,
});
const timer = setInterval(()=>{
    bar.tick();
    if(bar.complete){
        clearInterval(timer);
    }
}, 100)

console.log(chalk.green("Hii a green text in console!!"));
console.log(chalk.blue("Hii a blue text in console!!"));
