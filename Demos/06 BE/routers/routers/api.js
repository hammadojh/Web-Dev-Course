const express = require("express")
const router = express.Router()

router.get("/",(req,res)=>{
    res.json({success:"True",data:[]})
})

router.post("/",(req,res)=>{
    res.json({success:"True",data:[]})
})

module.exports = router