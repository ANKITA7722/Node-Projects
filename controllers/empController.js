const EmpModel = require("../models/employeeModels");

const empInfo = (req, res) => {
    res.send("this is employee info");
}

const empSave = (req, res) => {
    const { eno, empname, city, empsalary } = req.body;
    const employee = new EmpModel({
        empno: eno,
        name: empname,
        city: city,
        salary: empsalary
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
     const { city } = req.body;
     const data = await EmpModel.find({ "city": city });
     console.log(data);
    res.send(data);
}


module.exports = {
    empInfo,
    empSave,
    empDisplay,
    empSearch
}




