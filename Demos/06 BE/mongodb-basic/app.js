const express = require("express")
const app = express()
const {
    MongoClient
} = require("mongodb")

//basic routing
app.get("*", (req, res) => {
    res.end("Hey")
})

//connect to database
const uri = "mongodb://localhost:37017"
const dbclient = new MongoClient(uri)

async function run() {
    try {
        await dbclient.connect();
        const db = dbclient.db("carsdb")
        const cars = db.collection("car")
        const records = await cars.find({}).toArray()
        console.log(records)
    } catch (err) {
        console.log(err)
    }
};

run();

//start
app.listen(5003, () => {
    console.log("Listening to 5003..")
})