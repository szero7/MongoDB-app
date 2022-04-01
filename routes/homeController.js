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

// exports.getIndex = (req, res) => {
//     const products = [{
//         code: "test code",
//         description: "test description",
//         price: "test price"
//     }];

//     res.render("index", { title: "Product Database System", products: products });
// };


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


// exports.saveProduct = (req, res) =>{
//     const code = req.body.code;
//     const description = req.body.description;
//     const price = req.body.price;

//     const newProduct = new Product({code : code, description : description, price : price}); 
//     newProduct.save()
//     .then(()=>{
//         res.render("index")
//     })
//     .catch((error)=>{
//         console.log(error)
//     })
// };

// exports.getNew = (req, res)=>{
//     res.render("new");
// };

// exports.getSearch = (req, res)=>{
//     res.render("search");
// }