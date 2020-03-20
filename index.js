const express = require("express")

const welcomeRouter = require("./welcome/welcomeRouter")


const server = express()
const port = 9000

server.use(express.json())

server.use("/", welcomeRouter)



server.use((req, res) =>{
    res.status(404).json({
        message: "Route was not found."
    })
})

server.listen(port, () =>{
    console.log(`Server listening on port ${port}`)
})