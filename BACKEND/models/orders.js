const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const orderSchema = new Schema({
    
    

    product_name : {
        type : String,
        required:true

    },
    quantity:{
        type:Number,
        required:true

    },
    medicine_type : {
        type : String,
        required:true

    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
    Active: {
        type: Boolean,
        default: true,
      }
    
    
    
})

const orders = mongoose.model("orders",orderSchema);

module.exports= orders;
