const express = require("express")
const fs = require("fs")
const app = express()

app.use(express.static("public"))

app.get("/api/cars",(req,res)=>{
    res.sendFile(__dirname+"/data/cars.json")
})

app.get("/api/cars/toyota",(req,res)=>{
    
    //read cars
    json = readCarsFile()

    //filter for toyota
    filtered = json.filter((o)=>o.make === "Toyota")
    console.log(filtered)
    
    //return
    res.json(filtered)
})

app.get("/api/cars/search",(req,res)=>{
    console.log(req.query)

    //get query params
    const {make, model,year} = req.query

    // read file
    json = readCarsFile()

    // filter 
    filtered = json.filter((o)=>{
        o.make === make && o.model == model && o.year == year
    })

    return res.status(200).end("200")
})

app.get("/api/cars/:year",(req,res)=>{
    //read cars
    json = readCarsFile()

    //filter by year
    const {year} = req.params
    filtered = json.filter((o)=>o.year == Number(year))

    if (filtered) {
        res.json(filtered)
    }else{
        res.status(404).json({})
    }

})



app.listen(5001,()=>{
    console.log("Listening to 5001")
})

/// functions 

function readCarsFile(){
    //read json file
    data = fs.readFileSync("./data/cars.json")
    json = JSON.parse(data)
    return json
}