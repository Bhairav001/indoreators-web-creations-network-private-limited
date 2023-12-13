const express = require("express");
const { PostModel } = require("../model/Post.model");

const postRouter = express.Router()

postRouter.get("/",async(req,res)=>{
    let query = req.query;
    try {
        const post = await PostModel.find(query)
        res.send(post)
    } catch (error) {
        console.log({"msg":"not getting data","error":error.message})
    }
})


postRouter.post("/create",async(req,res)=>{
    const payload = req.body;
    try {
        const new_post = new PostModel(payload)
        await new_post.save()
        res.send("Created the note") 
    } catch (error) {
        console.log(error)
        res.send({"msg":"Something went wrong"})
    }
})


postRouter.patch("/update/:id",async(req,res)=>{
    const payload = req.body;
    const noteID = req.params.id;
    try {
        await PostModel.findByIdAndUpdate({_id:noteID},payload);
        res.send({msg:"note updated sucessfully"})
        console.log({msg:"note updated sucessfully"})
    } catch (error) {
        console.log(error.message)
    }
})


postRouter.delete("/delete/:id",async(req,res)=>{
    // const payload = req.body;
    const payload = req.body;
    const noteID = req.params.id;
    try {
        await PostModel.findByIdAndDelete({_id:noteID},payload);
        res.send({msg:"note deleted sucessfully"})
        console.log({msg:"note deleted sucessfully"})
    } catch (error) {
        console.log(error.message)
    }
})




module.exports={
    postRouter
}