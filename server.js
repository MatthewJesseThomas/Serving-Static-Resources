const express = require('express');
const app = express();

// To serve static files
app.use(express.static("public"));

app.get("/", (req, res) =>{
    res.send("<h1>You Have Navigated To About</h1>");
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
    res.send(results);
});
app.listen(8000, () =>{
    console.log("Node Server Started on Port 8000");
});