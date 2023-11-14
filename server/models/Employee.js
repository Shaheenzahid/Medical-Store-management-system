const mongoose = require("mongoose")


const EmployeeSchema = new mongoose.Schema({
    username: String,
    firstname: String,
    secondname: String,
    email: String,
    dob: String,
    role: String,
    password: String

})

const EmployeeModel = mongoose.model("employees", EmployeeSchema)
module.exports=EmployeeModel