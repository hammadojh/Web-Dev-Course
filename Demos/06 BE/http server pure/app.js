const http = require("http");
const { readFile } = require("fs")

const server = http.createServer((req, res) => {
    console.log(req.method)
    console.log(req.url)

    if (req.url === "/home") {
        res.writeHead(200)
        readFile("index.html",(err,data)=>{
            res.write(data)
            res.end();
        })
    }
    else if (req.url === "/style.css") {
        readFile("style.css",(err,data)=>{
            res.writeHead(200, {'Content-Type': 'text/css'});
            res.write(data)
            res.end();
        })
    } else if (req.url === "/about") {
        res.end("about");
    } else {
        res.end("<p>Noooo</p>");
    }
});

server.listen(3000);