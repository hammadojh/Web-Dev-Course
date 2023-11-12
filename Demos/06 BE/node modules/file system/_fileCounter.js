const fs = require("fs")
console.log("hello node")

// get directory name from the first arg
// read directory contents 
// count the number of files

args = process.argv
filename = args[2]

fs.readdir(filename,(error,files)=>{
    if (error){
        console.log("Could not read directory")
        process.exit()
    }
    
    console.log(`Directory ${filename} contains: ${files.length} files`)
})