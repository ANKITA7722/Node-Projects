// const express=require("express");
// const app=express();
// const mongoose = require("mongoose");
// const empRoute=require("./routes/employeeRoute");
// const bodyParser = require('body-parser');
// mongoose.connect("mongodb://127.0.0.1:27017/ankitaji").then(()=>{
//     console.log("DB succesfully Connected")
// });

// const express = require("express");

// app.use(bodyParser.urlencoded({ extended: true }));


// app.use(bodyParser.json());
// app.use("/employee",empRoute);
// app.listen(8000,()=>{
//     console.log("server run on 8000! port");
// })


// const express = require("express");
// const app = express();
// const MyName = (req, res, next) => {
//     console.log("this is my middlewere");
//     req.MyName = "ankita bobde";
//     next();
// }
// app.use(MyName)
// app.get("/", (req, res, next) => {
//     console.log("home page");
//     console.log(req.MyName);
//     res.send("hello this home page ")
//     next()
// })
// app.listen(8000, () => {
//     console.log("server run on 8000! port");
// })



// const express=require("express");
// const app = express();
// const middlewere=require("./middlewere/middleWere");
// app.get("/",(req,res)=>{
//     console.log("Home page" + req.myclg);
//     res.send("welcom to bhopal!!!"+ req.myclg)
// }) 
// app.get("/about", middlewere,(req,res)=>{
//     console.log("about page");
//     console.log("my obj "+ req.myclg)
//     res.send("about page " + req.myclg);
// })
// app.listen(8000, ()=>{
//     console.log("server run in 8000 !!")
// })


const express = require("express");
 const app = express();

 const mongoose=require("mongoose");
 require("dotenv").config();
 const port=process.env.PORT || 3000;
  mongoose.connect(process.env.DATABASE_STRING).then(()=>{
    console.log("DB succefully connected");
  });

  app.get("/",(req,res)=>{
    res.send("hello" +process.env.SECRETE_KEY)
  })

 app.listen(port, () => {
         console.log(`server run on ${port}`);
     })