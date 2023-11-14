const express = require("express")
const app = express()

app.use(express.static("public"))

app.get("/about",(req,res)=>{
    res.status(200).send("My name is Omar")
})

app.all("*",(req,res)=>{
    res.status(404).send("<h1>404</h1>")
})

app.listen(3000,()=>{
    console.log("listening on 3000")
})

// headers?