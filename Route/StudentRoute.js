const express=require("express")
const route=express.Router();
const StuController=require("../controllers/studentController");

route.get("/stuinfo",StuController.stuInformation);
route.get("/insert",StuController.studentSave);
route.get("/display",StuController.studentDisplay);


module.exports = route;