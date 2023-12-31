const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const productSchema = new Schema({
    
    

    product_name : {
        type : String,
        required:true

    },
    price:{
        type:Number,
        required:true

    },
    medicine_type : {
        type : String,
        required:true

    },
    description : {
        type : String,
        required:true

    },
    Active: {
        type: Boolean,
        default: true,
      },
      createdAt: {
        type: Date,
        default: Date.now,
      }
    
    
})

const products = mongoose.model("products",productSchema);

module.exports= products;
