// IMP: ALWAYS USE FILE PATH WITH SLASH(/) AND NOT WITH BACK-SLASH(\)
const path = require("path");
const filePath = "C:/Users/Atharv/Documents/web dev/JS/Node && express-2/file io/sample.txt";

//Directory name
console.log("The directory name: ",path.dirname(filePath));
// Also we can use:
console.log(__dirname);

// Base name
console.log("The base name: ",path.basename(filePath));
// Also we can use:
console.log(__filename);

// Extension
console.log("The extension: ",path.extname(filePath));

console.log("=====================")

const sampleFile = "sample.txt";
console.log(path.join(path.dirname(filePath), sampleFile));

console.log("=====================")
const fs = require("fs");
// console.log(fs)
// Asynchronous Way of Reading File:
fs.readFile(filePath,"utf-8", (err,data)=>{     //readFIle(Path_to_file, "encoding"(optional), callback function)
    if(err) throw new Error(err);
    console.log("!SYNC",data);
});
// ANother Way(omitting encoding argument):
fs.readFile(filePath, (err,data)=>{     
    if(err) throw new Error(err);
    console.log("!SYNC-2",data.toString());
});

// Synchronous Way of Reading File:
try{
    const data = fs.readFileSync(path.join(__dirname, "file io", "sample.txt"), "utf-8" )
    console.log("SYNC",data)
}catch(err){
    throw new Error(err);
}

/* readFile is async whereas readFileSync is Synchronous; so with readFile, it'll make a call to read file from sample.txt but the execution will go on simultaneously ==> the lower block of code i.e. the readFileSync will start executing. But readFileSync is blocking in nature thus the execution won't continue unless the "readFIleSync" has stopped execution. Then the control would return to readFile and it will console.log the read data.       Therefore on console we'll first see the SYNC output and then the !SYNC-2 and then !SYNC. */

// File System Promises:
const fsPromise = require("fs").promises;

const fileReadThroughFSPromise = async() =>{
    try{
        const data = await fsPromise.readFile(path.join(__dirname, "file io", "sample.txt"),{encoding:"utf-8"} );
        console.log("FS Promise-->",data);
    }catch(e){
        console.log(e);
    }

}
fileReadThroughFSPromise();

// Writing in a file
const filePath2 = "C:/Users/Atharv/Documents/web dev/JS/Node && express-2/file io/sample-2.txt";
const content = "This is how PROs write in a text file 😎 ."
fs.writeFile(filePath2, content, (err)=>{
    if(err) throw new Error("Something went wrong");
    console.log("Writing completed successfully: Check the sample-2.txt");
});

// Similar is writeFileSync which is the synchronous and blocking version of writeFile

// Now if we want to Read what we wrote through writeFile:

fs.writeFile(filePath2, content, (err)=>{
    if(err) throw new Error("Something went wrong");
    console.log("Writing completed successfully: Check the sample-2.txt");
    fs.readFile(filePath2, "utf-8", (err,data)=>{
        if(err) throw new Error("Error somewhere");
        console.log(data);
    })
});

const writeThroughPromises = async () =>{
    try{
        await fsPromise.writeFile(filePath2, content);
        await fsPromise.appendFile(filePath2, "\n Here's something wrote through promises.");
        const data = await fsPromise.readFile(filePath2, {encoding:"utf-8"});
        console.log(data);
    }catch(e){
        if(e) console.log(e);
    }
}
writeThroughPromises();
// If we do not wish to append file, we can use this way:
const writeThroughPromises2 = async () =>{
    try{
        await fsPromise.writeFile(filePath2, "\nA newer way to write content at the last..", {
            flag:"a+",  //This a+ will place the writing header at the end of a file. 
        });
        const data = await fsPromise.readFile(filePath2, {encoding:"utf-8"});
        console.log(data);
    }catch(e){
        if(e) console.log(e);
    }
}
writeThroughPromises2();

// Renaming

// const renamingThroughPromises = async () =>{
//     try{
//         await fsPromise.writeFile(filePath2, "\nRenaming the file", {
//             flag:"a+",  //This a+ will place the writing header at the end of a file. 
//         });         
//         await fsPromise.rename(filePath2, path.join(__dirname, "file io", "renamed.txt"))             
//         const data = await fsPromise.readFile(path.join(__dirname, "file io", "renamed.txt"), {encoding:"utf-8"});
//         console.log(data);
//     }catch(e){
//         if(e) console.log(e);
//     }
// }
// renamingThroughPromises();