const prompt = require('prompt-sync')();
const express = require('express');
const port = 3021;
const fs = require('fs') ;
const app = express();

// app.listen(port, () => {
//     console.log(`server started on port number ${port}`);
// });

let filename = prompt("please enter your user name :  ");
let password = prompt("Please provide Password..   ");
fs.readFile(`./${filename}.txt`, {}, (error, data) => {
    if(`${password}` == data){
        console.log("login successfully");
    }else(
        console.log("You have entered incorect password")
    )
})