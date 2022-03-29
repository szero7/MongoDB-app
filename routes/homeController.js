"use strict";

const Product = require("../model/product");


exports.index = (req, res) => {
    res.render("index", { title: "Product database system" });
};