const process = require("process")
const events = require("events")

ee = events.EventEmitter()

ee.on("login",()=>{
    console.log("logged in")
})

ee.emit("login")

process.stdout.write("Please enter anything:")

process.stdin.on("data",(data)=>{
    process.stdout.write(data)
    process.stdout.write("Please enter anything:")
})