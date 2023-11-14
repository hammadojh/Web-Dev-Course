const express = require("express")
const fs = require("fs")
const mw = require("./mw")
const auth = require("./auth")
const app = express()

// Middleware
app.use("/api",auth)


// routes
app.get("/",mw,(req,res)=>{
    res.end("hey")
})

app.get("/api",(req,res)=>{
    res.end("hey: "+req.query.user)
})

app.listen(5002,()=>{
    console.log("Listening to 5002")
})

