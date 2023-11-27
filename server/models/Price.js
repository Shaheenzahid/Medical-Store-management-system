const mongoose = require("mongoose")
const express = require("express");
const router = express.Router();
const { Schema } = mongoose;

const PriceSchema = new mongoose.Schema({
    PriceID: { type: Number, required: true, unique: true },
    ItemID: { type: mongoose.Schema.Types.ObjectId, ref: 'Inventory' },
    Price: { type: Number, required: true },
    CreatedAt: { type: Date, default: Date.now },
    UpdatedAt: { type: Date, default: Date.now },
    Active: { type: Boolean, default: true },
    EffectiveDate: { type: Date, default: Date.now }
  });

  const Price = mongoose.model('Price', PriceSchema);
  module.exports = Price;
