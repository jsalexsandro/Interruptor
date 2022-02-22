const Router = require("express").Router()

Router.get("/",(req,res) => {
    res.render("index.html")
})

Router.get("/turn",(req,res) => {
    res.render("app.html")
})

module.exports = Router