const express = require('express');
const port = 3020;
const fs = require('fs') ;
const app = express();
const prompt = require('prompt-sync')();

app.get('/', (_, res) => {
    res.send({
        Message : "wokring fine"
    })
})

app.listen(port, () => {
    console.log(`I am listening on ${port}`);
})

let filename = prompt("Enter your username?");
const password = prompt("Please provide password to create a file..");
fs.writeFile(`./${filename}.txt`, `${password}`, (error) => {
    console.log("New file has been created and password has been stored securely..!!")
});


