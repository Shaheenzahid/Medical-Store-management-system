const mongoose = require("mongoose");



const UserSchema = new mongoose.Schema({
    name: {
      type: String,
      require: true,
    },
    email: {
     type: String,

      require: true,
    },
    password: {
      type: String,
      require: true,
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
    // isAdmin: {
    //   type: Boolean,
    //   default: false,
    // },
    // active: {
    //   type: Boolean,
    //   default: true,
    // },
    cnic: {
      type: String,
      require: true,
    },
    phoneno:{
      type: String,
    }
    
  }, {timestamps : true });

  module.exports = mongoose.model("user", UserSchema);