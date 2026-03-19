import express from 'express';
const route=express.Router();

route.get('/',async(req,res)=>{
    res.json("Welcome to Job Board Backend Project !!")
})

export default route;
