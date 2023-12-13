const express = require("express")
const cors = require("cors");
const { connection } = require("./config/db");
const { postRouter } = require("./routes/Post.route");
const app = express()
require("dotenv").config()
app.use(express.json());

app.use(cors());

app.get("/",(req,res)=>{
    res.send("Notes App")
})
app.use("/notes",postRouter)
app.listen(process.env.port,async()=>{
    try {
        await connection
        console.log("connected to DB")
    } catch (error) {
        console.log(error)
    }
    console.log(`server has running port ${process.env.port}`)
})