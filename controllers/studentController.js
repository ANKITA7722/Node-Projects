const StuModel = require("../models/studentModels")

const stuInformation = (req, res) => {
    res.send("This is Student informatin we are cybrom");
}

const studentSave = (req, res) => {
    const {rollno,name,city,fees} = req.body;


    const student=new StuModel({
        
        rollno:rollno,
        name:name,
        city:city,
        fees:fees
        
        })
    student.save();
    res.send("Data succesfully Save");
}

const studentDisplay=async (req,res)=>{
    const studata= await StuModel.find();
     res.send(studata);
 }
module.exports = {
    stuInformation,
    studentSave,
    studentDisplay
}
