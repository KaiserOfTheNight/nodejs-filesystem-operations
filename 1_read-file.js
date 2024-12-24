const http = require("http")
const port = 3000
const fs = require("fs")

const server = http.createServer((req, res)=>{
   fs.readFile('file.txt', (error, data)=>{
    if(error){
        console.log("There is an error with file: " + error)
    }
    res.end(data)
   })

})


server.listen(port, ()=>{
    console.log(`Server is running on port 3000`)
})
