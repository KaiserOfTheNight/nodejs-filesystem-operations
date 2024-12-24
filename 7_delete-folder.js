const http = require("http")
const port = 3000
const fs = require("fs")

const server = http.createServer((req, res)=>{
    fs.rmdir("folder", (error)=>{
        if(error) console.log(error)
    })
    console.log("File deleted successfully!!")
})


server.listen(port, ()=>{
    console.log(`Server is running on port 3000`)
})

