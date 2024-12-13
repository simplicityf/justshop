const dotenv = require("dotenv").config()
const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")
const cookieParser = require("cookie-parser")

const app = express()

const PORT = process.env.PORT
const CONNECTION_URL = process.env.CONNECTION_URL

mongoose.connect( CONNECTION_URL).then(()=>{console.log("Mongodb connected successfully")})
    

//Routes
app.get("/", (req, res) => {
    res.send("Hello, World!")
})

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
    console.log(`http://localhost:${PORT}`)
})