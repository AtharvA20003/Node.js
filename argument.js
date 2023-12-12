console.log(process.argv); // Process.argv have 1st line/output as path of where node js is installed, 2nd is path of our file and 3rd and latter the arguments we passed. Each space separated value is a different value/argument passed form cmd.

// run this node argument.js name=Dau Wow many arguments

console.log(process.argv.slice(2)[0]);   
process.argv.forEach((val, index)=>{
    console.log(`${index} : ${val}`)
});

// npm i minimist
const minimist = require("minimist");
// const argNew = minimist(process.argv.slice(2)[0]);
const argNew = minimist(process.argv.slice(2)); // no need to pass [0]  //ALso with minimist if we are using key-value pairs, we have to specify them by --key=value (--name=xyz)
console.log(argNew.ARG4);