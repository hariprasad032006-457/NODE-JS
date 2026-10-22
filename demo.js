const registeruser=require('./registration.js');
const os=require('os');
const fs=require('fs');
const express=require('express');
function sayHello() {
    console.log("say hello");
}
sayHello();  
registeruser.registeruser()

const isExisting=registeruser.checkuser();
if(isExisting){
    console.log("user already exists");
}
else{
    console.log("user does not exist");
}
console.log(os.hostname());
console.log(os.freemem());
fs.writeFile('./sample.txt','testing fs module',(err)=>{
    if(err)
    {
        console.log("error occured");
        return
    }
    
    console.log("file created");

})
fs.readFile('./sample.txt','utf-8',(err,data)=>{
    if(err)
    {
        console.log("error occured");
        return
    }   
    console.log("data in file:",data);
})
//npm = node package manager
//express is a framework for node.js

try{
    fs.writeFileSync('./sample2.txt','try the fs module with sync method');
    console.log("file created");

}
catch(err){
    console.log("error occured");
}