//Exception Handling

//Error object
const error = new Error("Something went wrong");
// console.log(error.stack);
// console.log(error.message);

const { configDotenv } = require('dotenv');
// throw new Error("Hello 'Thrown' towards you by error object ;p");

//3rd way
const {CustomError} = require('./error-2.js');
// throw new CustomError("New error msg 'Thrown' by error's constructor") 

// Exception handling
// try{
//     doSomething();
// }catch(e){
//     console.log("ERROR");
//     console.log(e);
// }
function doSomething(){
    console.log("Here is a simple console.log statement");
    console.log("Below is an exception invoking statement,Be ready");
    const data = abc('localhost:3000/api') // There exists nothing like abc..
}

//Uncaught Exception:
// But for this comment out former try catch block

// process.on("uncaughtException", (error)=>{
//     console.log("There was an uncaught Exception");
//     process.exit(1);
// })
doSomething();

//Exception with Promises:
// const promise = new Promise((resolve, reject) =>{
//     if(false){
//         resolve(doSomething());
//     }else{
//         reject(doSomething());
//     }
// });
// promise
// .then((val) => {
//     console.log(val);
// })
// .catch((err)=>{
//     console.log("Err..");
//     console.log(err);
// });

// Exception with Async-Await:
const someFunction = async()=>{
    try{
        await doSomething();
    }
    catch(err){
        throw new CustomError("Problem");
    }
};
someFunction();