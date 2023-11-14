const express = require("express")
const app = express()

//middlewears
app.use(express.static("public"))
app.use(express.json()) // to parse json 
// app.use(express.urlencoded()) // to parse form body

// routes
app.get("/",(req,res)=>{
    res.end("hey")
})

app.post("/form",(req,res)=>{
    console.log(req.body)
})

app.listen(5003,()=>{
    console.log("Listening to 5003..")
})

