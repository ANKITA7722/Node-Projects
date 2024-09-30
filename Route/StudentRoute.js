const express=require("express")
const route=express.Router()
const StuController=require("../controllers/studentController")

route.get("/stuinfo",StuController.stuInformation)
route.get("/datasave",StuController.studataSave)

module.exports=route