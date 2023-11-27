const mongoose = require("mongoose")
const express = require("express");
const router = express.Router();
const { Schema } = mongoose;

const InventorySchema = new mongoose.Schema({
    ItemID: { type: Number, required: true, unique: true },
    ItemName: { type: String, required: true },
    Quantity: { type: Number, default: 0 },
    ExpireDate: Date,
    CreatedAt: { type: Date, default: Date.now },
    UpdatedAt: { type: Date, default: Date.now },
    Active: { type: Boolean, default: true }
  });

  const Inventory = mongoose.model('Inventory', InventorySchema);
  module.exports = Inventory;