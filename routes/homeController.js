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
            res.redirect("/");
        })
        .catch(error => {
            console.log(error);
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
            res.redirect("/");
        })
        .catch(error => {
            console.log(error);
        });
};


exports.delete = (req, res) => {
    const searchQuery = { _id: req.params.id };
    Product.deleteOne(searchQuery)
        .then(() => {
            res.redirect("/");
        }).catch(error => {
            res.redirect("/");
        });
};


exports.searchForm = (req, res) => {
    res.render("search", { title: "Search product" });
};

// exports.giveResult = (req, res) => {
//     let product = req.body;
//     const searchByCode = { code: req.body.code };
//     Product.find(searchByCode)
//         .then(product => {
//             res.render("result", { title: "Result", product: product });
//         })
//         .catch(error => {
//             console.log(error);
//         });
// };