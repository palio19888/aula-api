const express = require("express")
const app = express()
const index = require("./routes/index")

app.use(express.json())

app.use(function (req, res, next) {
    res.header("access-control-allow-origin", "*")
    res.header(
        "access-control-allow-headers",
        "origin, x-requested-with, content-typ,accept"
    )
    next()
})

app.use("/", index)
module.exports = app
