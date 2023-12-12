// takes 2 arguments -- resolve and reject
const promise = new Promise((resolve, reject)=>{
    console.log("Async task Execution.");
    if(true){
        resolve();
    }else{
        reject();
    }
});
promise.then(
    ()=>{console.log("Resolved/ Passed")},
    ()=>{console.log("Rejected...")}
)
const promise2 = new Promise((resolve, reject)=>{
    console.log("Async task Execution.");
    if(true){
        const person = {name:"ABC"}
        resolve(person);
    }else{
        const err = {errCode:"1001"}
        reject(err);
    }
});
promise2.then(
    (val)=>{
        console.log("Resolved/ Passed2: ",val)
    },
    (val)=>{
        console.log("Rejected2... ",val)
    }
)
.catch(()=>console.log("Failed and err handled"))
.finally(()=>console.log("I will run no matter what"))

let a = Promise.resolve("Promise resolved.")
// let b = Promise.reject("Promise rejected.")
a.then((val)=>console.log(val));