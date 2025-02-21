//const express = require('express');
import express from 'express';
const app = express();
const port = 3000;
app.get('/',(req,res)=>{
    res.send("Welcome to Express")
});

//  http://localhost:3000/api?name=Rajesh&rollno=899
// app.get('/api',(req,res)=>{
    // const {name="Guest",rollno=100} = req.query;         //by default use guest and on the browser also guest is shown
//    try {
//     const {name, rollno} = req.query;
//     if(!name){
//         return res.status(400).send("Name is required");
//     }
//     else{
//         res.send(`Welcome to ABES: ${name} and Roll no. id ${rollno}`)
//     }
//    } catch (error) {
//     console.log(`Error: ${error.message}`)
//    }
// });
// localhost:3000/api/anshika/6774
app.get('/api/:name/:rollno',(req,res)=>{
    try{
        const {name, rollno} = req.params;
        res.send(`welcome ${name} and Your roll no. is ${rollno}`);
    }
    catch(error){
        console.log(`Error is : ${error.message}`)
    }
});

app.listen(port,()=>{
    console.log(`Server is running on ${port}`);
});

