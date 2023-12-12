// Callback functions are passed as an argument into another function. This Another function will execute the callback function at a later point of time.
// Callbacks are synchronous in nature !

// console.log("Task Started")
// function asyncTask(cb){
//     console.log("Task Running")
//     cb();
// }
// asyncTask(() => console.log(nAme));
// console.log("Task Completed");
// const nAme = 'ABC'

// The Above code will give error => can't access name before initialisation. If callbacks were asynchronous, then this error woudn't have been arrived. We employ certain techniques to make callback functions Async instead of Sync..

// Not to get confused with hoisting in JS, only 'var' are hoisted and not let/const

console.log("Task Started")
function asyncTask(cb){
    console.log("Task Running")
    setTimeout(cb, 0);          //We made it Async using setTimeout => all variables are registered in memory and then used accordingly
}
asyncTask(() => console.log(nAme)); 
console.log("Task Completed");
const nAme = 'ABC'

// Better practice to write it as: 
function asyncTask(cb){

    setTimeout(()=>{
        // cb("Error!"); 
        cb(null, "This is data from server!");  //null if we dont have an error.
    })          
}
asyncTask((err, data)=>{    //Convention is to pass error as the first argument and data as the second. Thus we write it as asyncTask((err,data)
    if(err) throw err
    else console.log("data: ", data);
}); 
// Called as Error first callback

// CALLBACK HELL:

function makeAPICall(){
    setTimeout(()=>{
        console.log("This is an Async task execution");
    },0)
}
// makeAPICall(()=>{
//     makeAPICall(()=>{
//         someAsyncTask(()=>{
//             someAsyncTask(()=>{
//                 ...              //This kind of nesting while using asynchronous programming is called Callback Hell.
//             })
//         })
//     })
// })

// To do help in preventing these, we use Promises, aync and await. 


