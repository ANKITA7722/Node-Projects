const StuModel = require("../models/studentModel")

const stuInformation = (req, res) => {
    res.send("This is Student informatin we are cybrom")
}

const studataSave = (req, res) => {
    const {rollno,name,city}=req.body;


    const student=new StuModel({
        
        rollno:rollno,
        name:name,
        city:city
        
        })
    student.save();
    res.send("Data succesfully Save")
}
module.exports = {
    stuInformation,
    studataSave
}
