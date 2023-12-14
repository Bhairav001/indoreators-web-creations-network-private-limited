const express = require("express");
const { PostModel } = require("../model/Post.model");

const postRouter = express.Router()


//http://localhost:8080/notes/
postRouter.get("/",async(req,res)=>{
    // let query = req.query;
    try {
        const post = await PostModel.find({})
        res.json({success:true, data:post})
    } catch (error) {
        console.log({"msg":"not getting data","error":error.message})
    }
})


//http://localhost:8080/notes/create/
postRouter.post("/create",async(req,res)=>{
    const payload = req.body;
    try {
        const new_post = new PostModel(payload)
        await new_post.save()
        res.send({success:true,message:"data created Successfully",data:new_post})
    } catch (error) {
        console.log(error)
        res.send({"msg":"Something went wrong"})
    }
})


//http://localhost:8080/notes/update
postRouter.put("/update",async(req,res)=>{
    const  {_id, ...rest} = req.body;
    try {
       const data =  await PostModel.updateOne({_id:_id},rest);
        res.send({success:true,message:"data updated Successfully",data:data})
    } catch (error) {
        console.log(error.message)
    }
})


//http://localhost:8080/notes/delete/:id
postRouter.delete("/delete/:id",async(req,res)=>{
    const id = req.params.id;
   try {
      const data =  await PostModel.deleteOne({_id:id});
       res.send({success:true,message:"data deleted Successfully",data:data})
   } catch (error) {
       console.log(error.message)
   }
})




module.exports={
    postRouter
}