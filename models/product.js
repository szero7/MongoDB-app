const mongoose = require("mongoose");

//schema
const productSchema = mongoose.Schema({
    code: String,
    description: String,
    price: Number,
});

//exporter le schema
//Product = mongoose.model("Product", productSchema)
module.exports = mongoose.model("Product", productSchema);