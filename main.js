"use strict";

const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const methodOverride = require("method-override");
const path = require("path");
const expressLayouts = require("express-ejs-layouts");
const Product = require("./models/product");
const productsRoutes = require("./routes/products");

dotenv.config({ path: "./config.env" });
mongoose.connect(process.env.DATABASE_LOCAL, { useNewUrlParser: true });

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(methodOverride("_method"));

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.use(express.static("public"));

app.set("layout", "./layouts/myLayouts");
app.use(expressLayouts);




//routes
app.use(productsRoutes);



//port
const port = process.env.PORT || 4000;
app.listen(port, () => {
    console.log(`Server has started and is listening at port ${port}`);
});