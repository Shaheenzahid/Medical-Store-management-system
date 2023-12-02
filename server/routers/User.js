const express = require("express");
const router = express.Router();
const User = require("../models/User");
router.use(express.json());



// router.post('/register',(req,res)=>{
//     UserModel.create(req.body)
//     .then(User => res.json(User))
//     .catch(err => res.json(err))
// })

router.post("/register", async (req, res) => {
    const data = User(req.body);
    await data.save().catch((err) => {
      console.log(err);
      res.send({ success: false });
    });
    res.send({ success: true });
  });
// app.post('/login',(req,res)=>{
//     const {username,password}=req.body;
//     EmployeeModel.findOne({username: username})
//     .then(user => {
//         if(user){
//             if(user.password === password){
//                 res.json("Success")
//             }
//             else{
//                 res.json("password is incorrect")
//             }
//         }
//         else{
//             res.json("No Record exits")
//         }
//     })
// })

router.get("/logIn/:email/:password", async (req, res) => {
    const Email = req.params.email;
    const Password = req.params.password;
    try {
      const data = await User.findOne({ Email, Password });
      if (data) {
        res.send({ success: true, data });
      } else {
        res.send({ success: false });
      }
    } catch (error) {
      console.error(error);
    }
  });

  module.exports = router;