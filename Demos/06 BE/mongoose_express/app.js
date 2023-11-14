const express = require("express")
const mongoose = require("mongoose")
const app = express()

//basic routing
app.get("*", (req, res) => {
    res.end("Hey")
})

//connect to database
const uri = "mongodb://localhost:37017"
async function run() {
    mongoose.connect(uri)
    console.log("connected")
}
run();

// db operations
const CarSchema = new mongoose.Schema({
    make: String,
    model: String,
    year: Number,
    color: String,
    price: Number
}, {
    timestamps: true
})

const Car = mongoose.model("Car", CarSchema)
const landCruiser = new Car({
    make: "Toyota",
    model: "Land Cruiser",
    year: 2024,
    color: "White",
    price: 250000,
})

async function saveCar(car) {
    await car.save()
}

saveCar(landCruiser)

//start
app.listen(5003, () => {
    console.log("Listening to 5003..")
})