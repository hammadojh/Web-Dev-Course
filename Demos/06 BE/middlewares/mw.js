const simpleMW = (req,res,next) => {
    //code
    console.log("i am a middleware")
    next()
}

module.exports = simpleMW