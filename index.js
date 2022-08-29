
require ("dotenv").config()

const { Router, application } = require("express")
const express=require('express')

const mongoose=require('mongoose')
const router=require("./src/Router/router")
const app=express()

app.use('/',router)

mongoose.connect("mongodb+srv://firstDB:zwPu7dwJG0RCXU9f@cluster0.kgij2.mongodb.net/YOUR_NAME?retryWrites=true&w=majority",{
    useNewUrlParser:true,
    
   
}
);

app.use('/',router)

app.listen(process.env.PORT,function(){
    console.log("Express is Running On port"+ process.env.PORT)
})


