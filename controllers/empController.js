const EmpModel = require("../models/employeeModels");

const empInfo = (req, res) => {
    res.send("this is employee info");
}

const empSave = (req, res) => {
    const { empno, name, city, salary } = req.body;
    const employee = new EmpModel({
        empno: empno,
        name: name,
        city: city,
        salary: salary
    })
    employee.save();
    console.log(req.body);
    res.send("your data  save");
}

const empDisplay = async (req, res) => {
    const data = await EmpModel.find();
    res.send(data);
}

const empSearch = async (req, res) => {
     const { empno, name } = req.body;
     const data = await EmpModel.find({$and: [{empno: empno, name:name}] });
     console.log(data);
    res.send(data);
}

const empSearchByQuery = async(req,res)=>{
    const {name ,city} = req.query;
     const data = await EmpModel.find({$and:[{"name":name},{"city":city}]});
    res.send(data);
}
const empSaveCreate = async(req,res)=>{
    const{empno,name,city,salary} = req.body;
    const Mydata = await EmpModel.create({
        empno: empno,
        name: name,
        city: city,
        salary: salary
    })
    res.send(Mydata);
}
module.exports = {
    empInfo,
    empSave,
    empDisplay,
    empSearch,
    empSearchByQuery,
    empSaveCreate
}






