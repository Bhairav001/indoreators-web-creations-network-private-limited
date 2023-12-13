const express = require("express")
const cors = require("cors");
const { connection } = require("./config/db");
const app = express()
require("dotenv").config()
app.use(express.json());

app.use(cors());

app.get("/",(req,res)=>{
    res.send("Home Page")
})

app.listen(process.env.port,async()=>{
    try {
        await connection
        console.log("connected to DB")
    } catch (error) {
        console.log(error)
    }
    console.log(`server has running port ${process.env.port}`)
})