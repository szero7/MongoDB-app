const Product = require("../models/product");

exports.getIndex = (req, res) => {
    res.render("index", { title: "Product database system" });
};

exports.saveProduct = (req, res) =>{
    const code = req.body.code;
    const description = req.body.description;
    const price = req.body.price;

    const newProduct = new Product({code : code, description : description, price : price}); 
    newProduct.save()
    .then(()=>{
        res.render("index")
    })
    .catch((error)=>{
        console.log(error)
    })
};

exports.getNew = (req, res)=>{
    res.render("new");
};

exports.getSearch = (req, res)=>{
    res.render("search");
}