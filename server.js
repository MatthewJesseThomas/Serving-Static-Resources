const express = require('express');
const app = express();

// To serve static files
app.use(express.static(__dirname + "/public/css"));

app.get("/", (req, res) =>{
    res.sendFile(__dirname + "/public/pages/index.html");
});
/*
Assignment
Create a route for home and return the steps to create Express server
*/
app.get("/home", (req, res) =>{
    const result = [
    { step: 1, action: "npm init"},
    { step: 2, action: "install express"},
    { step: 3, action: "load express"},
    ];
    res.send(result);
});
app.listen(3500, () =>{
    console.log("Node Server Started on Port 3500");
    console.log(__dirname)
});