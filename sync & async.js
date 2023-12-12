// This is a Synchronous code block: The execution will of lower code parts will be halted untill one section isn't completely executed... Like in the below example "Opertaion done" will only be printed after while loop is completed and not anytime random. 
console.log("Execution started");
function sleep(milliseconds){
    let start = new Date().getTime();
    while(new Date().getTime()<start+milliseconds){
        console.log("In progress");
    }
    console.log("Operation done");
}
sleep(1000);
console.log("Execution done");

// Async Conversion of Above CODE:
// setTimeout: --> async version
console.log("Execution started 2.0");
function sleep2(milliseconds){
    console.log("About to start Async timer")
    setTimeout(()=>{
        console.log("Operation running")
    }, milliseconds)
    console.log("Operation done 2.0");
}
sleep2(1000);
console.log("Execution done 2.0");
// IN this case Execution was asynchronous --> node didn't wait for setTimeout part to finish first and then to execute rest, it let it run simultaneously and execution happened as well. Thus we'll have Execution started 2.0 -> About to start Async timer -> Operation done 2.0 -> Execution done 2.0 => Operation running. It is so because Operation running is printed when it is completed, but rest of the code did work parallely. (No waiting & blocking).

// Working of this async mumbo-jumbo:
// Things work normally until the browser call stack encounters any Async functions like setTimeout/setInterval/AJAX reqs etc. When such things come in call stack, what happens is they are handed over to Web API - separate thread to handle async stuff. Web API will execute the async functions. In the Web API, setTimeout(say) will register itself to an  Event table. Event table will put this function into a task queue. In task queue these async functions will wait for the call stack to be empty (normal execution completion) and after that using something called as an Event loop all of these call back functions are sent to call stack where their execution is completed (i.e. The execution is completed in call stack only just that they wait for thier turn at last... 🥲)
// All of this is because JAVASCRIPT IS A SINGLE THREADED SYNCHRONOUS LANGUAGE with just some tricks up its sleeve to handle Async stuff smartly.
