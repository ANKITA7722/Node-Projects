

const express =require("express")
const app=express();
const mongoose=require("mongoose")
const StuRoute=require("./Route/StudenstRoute");
const bodyParser = require("body-parser");

mongoose.connect("mongodb://127.0.0.1:27017/kamlesh").then(()=>{
    console.log("Database Succesfully connected");
})

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:false}))

app.use("/students",StuRoute)

app.listen(9000,()=>{
    console.log("Server is running on 9000")
})