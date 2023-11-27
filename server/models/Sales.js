const mongoose = require("mongoose")
const express = require("express");
const router = express.Router();
const { Schema } = mongoose;


const SalesSchema = new mongoose.Schema({
    SalesID: { type: Number, required: true, unique: true },
    UserID: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    SaleDate: { type: Date, default: Date.now },
    TotalAmount: { type: Number, required: true },
    CreatedAt: { type: Date, default: Date.now },
    UpdatedAt: { type: Date, default: Date.now },
    Active: { type: Boolean, default: true }
  });

  const Sales = mongoose.model('Sales', SalesSchema);
  module.exports = Sales;