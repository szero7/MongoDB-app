"use strict";

const mongoose = require("mongoose");

//schema
const productSchema = mongoose.Schema({
    code: Number,
    description: String,
    price: Number,
});

//exporter le schema
module.exports = mongoose.model("Product", productSchema);