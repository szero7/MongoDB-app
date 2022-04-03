"use strict";

const Product = require("../models/product");

exports.getIndex = (req, res) => {
    Product.find({})
        .then(product => {
            res.render("index", { title: "Product Database System", products: product });
        })
        .catch(error => {
            console.log(error);
        });
};


exports.addProduct = (req, res) => {
    res.render("new", { title: "Add product", product: new Product() });
};


exports.saveProduct = (req, res) => {

    const product = new Product({
        code: req.body.code,
        description: req.body.description,
        price: req.body.price
    });
    product.save()
        .then(product => {
            res.redirect("/"); // res.redirect(`/${products._id}`);
        })
        .catch(error => {
            console.log(error);
            res.render("new", { product: product });
        });
};


exports.findOneProduct = (req, res) => {

};