"use strict";

const mongoose = require("mongoose");

//schema
const productSchema = mongoose.Schema({
    code: {
        type: String,
        required: true,
        unique: true
    },
    description: {
        type: String,
        required: true,
        unique: true
    },
    price: {
        type: Number,
        required: true
    }
});

productSchema.methods.getInfos = function() {
    return `Code: ${this.code}, Description: ${this.description}, Price: ${this.price}`;
};


//exporter le schema
module.exports = mongoose.model("Product", productSchema);