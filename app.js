const express=require("express");
const mongoose=require("mongoose");
const app=express();
const path=require("path");
const ejsMate = require("ejs-mate");
app.use(express.static('public'));
app.set("view engine","ejs");
app.engine("ejs", ejsMate);
app.set("views",path.join(__dirname,"views"));
app.use(express.urlencoded({extented:true}));
const jobs=require("./models/job");
app.listen(8000,()=>{
    console.log("server is listening");
})
app.get("/",(req,res)=>{
    res.send("Welcome to Vilclap!!");
})
main().then(()=>{
    console.log("connected to db");

 }).catch((err)=>{
    console.log(err);
 })
async function main(){
     await mongoose.connect('mongodb://127.0.0.1:27017/vilclap')
}
app.get("/vilclap",(req,res)=>{
    res.render("pages/index.ejs");  //shradha gandiiiiiiiiiiii
})

app.get("/vilclap/jobs",async(req,res)=>{
    const alljobs=await jobs.find();
    res.render("pages/job.ejs",{alljobs});
});

app.get("/vilclap/job/form",(req,res)=>{
    res.render("pages/jobform.ejs");
})