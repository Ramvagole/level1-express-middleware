const express=require("express")
const bodyprase=require("body-parser")
const fs=require("fs")
const app=express()
app.use(express.json())
let validate=function(req,res,next){
    let {ID,Name,Rating,Description,Genre,Cast}=req.body
    let error=[]
    if(typeof ID !=="number"){
        error.push("invalid id not number")
    }
    if(typeof Name !== "string"){
        error.push("invalid name not string")
    }
    if(typeof Rating !== "number"){
        error.push("invalid Rating not number")
    }
    if(typeof Description !== 'string'){
        error.push("invalid description not a string")
    }
    if(typeof Genre !== 'string'){
        error.push("inavlid genre not string")
    }
    if(typeof Cast !== "string"){
        error.push("invalid not string")
    }
    if(error.length>0){
        fs.appendFileSync("./res.txt","bad request. some data is incorrect."+"\n")
        res.status(400).send("bad request. some data is incorrect.")
    }else{
        next()
    }
}
app.post("/home",validate,(req,res)=>{
    res.status(200).send("data received")
})

app.listen(8000,()=>{
    console.log("server is hosted")
})