const express=require("express")
const mongoose=require("mongoose")
const cors=require("cors")
const EmployeeModel = require('./models/Employee')

const app = express();
app.use(express.json());
app.use(cors());



app.post('/login',(req,res)=>{
    const {username,password}=req.body;
    EmployeeModel.findOne({username: username})
    .then(user => {
        if(user){
            if(user.password === password){
                res.json("Success")
            }
            else{
                res.json("password is incorrect")
            }
        }
        else{
            res.json("No Record exits")
        }
    })
})

app.post('/register',(req,res)=>{
    EmployeeModel.create(req.body)
    .then(employees => res.json(employees))
    .catch(err => res.json(err))
})
app.use('/home',(req,res)=>{
   
})

app.listen(3001, () =>{
    console.log("server is running")
})
