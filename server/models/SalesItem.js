const mongoose = require("mongoose")
const express = require("express");
const router = express.Router();
const { Schema } = mongoose;

const SalesItemSchema = new mongoose.Schema({
    SalesItemID: { type: Number, required: true, unique: true },
    SaleID: { type: mongoose.Schema.Types.ObjectId, ref: 'Sales' },
    ItemID: { type: mongoose.Schema.Types.ObjectId, ref: 'Inventory' },
    QuantitySold: { type: Number, required: true },
    CreatedAt: { type: Date, default: Date.now },
    UpdatedAt: { type: Date, default: Date.now },
    Active: { type: Boolean, default: true },
    UnitPrice: { type: Number },
    SubTotal: { type: Number },
    MedicinePrice: { type: mongoose.Schema.Types.ObjectId, ref: 'Price' }
  });

  const SalesItem = mongoose.model('SalesItem', SalesItemSchema);
  module.exports = SalesItem;