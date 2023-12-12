// Input from user through console.
const readLine = require("readline");
const prompt = require("prompt-sync")();
const rl = readLine.createInterface({
    input: process.stdin,
    output: process.stdout,
});
// WAY - 1:
// rl.question(`What is your Name? `, name=>{  //After hitting enter this callback function would run.
//     console.log(`Hii Mr./Ms. ${name}`);
//     rl.close();
// });

// WAY - 2 
const age = prompt("Thy Age ?");
console.log(`Hi the guy aged: ${age}`);     //No need of a callback function here... But we'll have to exit node from command line..