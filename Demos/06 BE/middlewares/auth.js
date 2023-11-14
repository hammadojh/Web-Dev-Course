const aith = (req,res,next) => {
    //code
    console.log("i am authorizing")
    if (req.query.user){
        next()
    }else{
        return res.status(403).json({code:403, status:"Unauthorized"})
    }
    
}

module.exports = aith