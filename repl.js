// READ EVALUATE PRINT LOOP
const repl = require('repl');
// const local = repl.start(); // This will start a node js server on the terminal without our need to write somthing like "node"
// const local = repl.start("Start wiht a custom phrase..");  
const local = repl.start("$");  

local.on("exit", ()=>{          //Works with node repl.js and not with nodemon repl.js
    console.log("Exiting REPL");
    process.exit();
});