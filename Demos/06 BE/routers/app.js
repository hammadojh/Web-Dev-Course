const express = require("express")
const app = express()
const navRouter = require("./routers/navigation")
const apiRouter = require("./routers/api")

//view engine
app.set("view engine","ejs")

//middlewares
app.use(express.static("public"))

//navbar
app.use("/",(req,res,next)=>{
    res.locals.navbar = 'components/navbar';
    next();
})

//routers
app.use("/",navRouter)
app.use("/api",apiRouter)

//start
app.listen(5003,()=>{
    console.log("Listening to 5003..")
})

