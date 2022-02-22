const http = require("http")
const express = require("express")
const path = require("path")
const ejs = require("ejs")
const socketLib = require("socket.io")

// dotenv configs
require("dotenv").config()

const configs = {
    port:process.env.PORT || 3000
}

const app = express();
const server = http.createServer(app)
const sio = require("socket.io")(server)

app.use(express.static(path.join(__dirname,"public")))
app.set("views",path.join(__dirname,"public"))
app.engine("html",ejs.renderFile)
app.set("view engine","html")

app.use(require("./routes"))

sio.on("connection",(socket) => {
    console.log(socket.id)
    socket.on("to_on",(port) => {
        sio.emit("on",port)
    })  
    socket.on("to_off",(port) => {
        sio.emit("off",port)
    })  
})

server.listen(configs.port,() => {
    console.log(`The server started in: http://localhost:${configs.port}`)
})