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


exports.saveAndRedirect = (req, res) => {
    const product = new Product({
        code: req.body.code,
        description: req.body.description,
        price: req.body.price
    });
    product.save()
        .then(product => {
            req.flash("success_msg", "product added successfully");
            res.redirect("/");
        })
        .catch(error => {
            req.flash("error_msg", `failed to add product. ${error.message}`);
            res.render("new", { product: product });
        });
};


exports.edit = (req, res) => {
    const searchById = { _id: req.params.id };
    Product.findOne(searchById)
        .then(product => {
            res.render("edit", { title: "Edit product", product: product });
        })
        .catch(error => {
            console.log(error);
        });
};

exports.updateAndRedirect = (req, res) => {
    const searchQuery = { _id: req.params.id };
    Product.updateOne(searchQuery, {
            $set: {
                code: req.body.code,
                description: req.body.description,
                price: req.body.price
            }
        }).then(product => {
            req.flash("success_msg", "product updated successfully");
            res.redirect("/");
        })
        .catch(error => {
            req.flash("error_msg", `failed to update product. ${error.message}`);
            res.redirect(`/edit/${product._id}`); //à vérifier
        });
};


exports.delete = (req, res) => {
    const searchQuery = { _id: req.params.id };
    Product.deleteOne(searchQuery)
        .then(() => {
            req.flash("success_msg", "product deleted successfully");
            res.redirect("/");
        }).catch(error => {
            req.flash("error_msg", `failed to delete product. ${error.message}`);
            res.redirect("/");
        });
};


exports.searchForm = (req, res) => {
    res.render("search", { title: "Search product" });
};

exports.giveResult = (req, res) => {

    const searchByCode = { code: req.body.code };
    Product.find(searchByCode)
        .then(product => {
            console.log(product.getInfos());
            res.render("search", { title: "Result", product: product });
        })
        .catch(error => {
            console.log(error);
        });
};