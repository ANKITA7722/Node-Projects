const express = require("express");
const route = express.Router();
const EmpController = require("../controllers/empController");

route.get("/info", EmpController.empInfo);
route.post("/save", EmpController.empSave);
route.get("/display", EmpController.empDisplay);



module.exports = route;