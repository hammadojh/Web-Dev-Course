const mongoose = require("mongoose")

const CarSchema = new mongoose.Schema({
    _id: String,
    make: String,
    model: String,
    year: Number,
    color: String,
    price: Number
}, {
    timestamps: true
})

module.exports = mongoose.model("Car", CarSchema)