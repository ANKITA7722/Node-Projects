// const express=require("express");
// const app=express();
// const mongoose = require("mongoose");
// const empRoute=require("./routes/employeeRoute");
// const bodyParser = require('body-parser');
// mongoose.connect("mongodb://127.0.0.1:27017/ankitaji").then(()=>{
//     console.log("DB succesfully Connected")
// });

// app.use(bodyParser.urlencoded({ extended: true }));


// app.use(bodyParser.json());
// app.use("/employee",empRoute);
// app.listen(8000,()=>{
//     console.log("server run on 8000! port");
// })


const express=require("express");
 const app=express();

app.use("/",(req,res,next)=>{
res.send("start")
next();
})

app.get("/home",(req,res)=>{
res.send("home page");
})

app.use("/",(req,res)=>{
    res.send("end")
    })

app.listen(8000,()=>{
    console.log("server run on 8000! port");
})
