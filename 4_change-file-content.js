const http = require("http")
const port = 3000
const fs = require("fs")

const server = http.createServer((req, res)=>{
    fs.appendFile('file.txt', 'Hello, world!', (err) => {
        if (err) console.log(err);
    });
    console.log("content change successully")
})


server.listen(port, ()=>{
    console.log(`Server is running on port 3000`)
})
