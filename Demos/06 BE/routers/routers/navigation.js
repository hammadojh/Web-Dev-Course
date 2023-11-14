const express = require("express")
const router = express.Router()
const path = require('path')

router.get("/",(req,res) => {
    res.status(200).render('index')
})

router.get("/about",(req,res) => {
    res.status(200).render('about')
})

router.get("/contact",(req,res) => {
    res.status(200).render('contact')
})

module.exports = router