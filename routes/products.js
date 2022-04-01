const express = require("express");
const router = express.Router();
const homeController = require("./homeController");

router.get("/", homeController.getIndex);
router.get("/", homeController.getProducts);
router.post("/index", homeController.saveProduct);
router.get("/index", homeController.getIndex);
router.get("/new", homeController.getNew);
router.get("/search", homeController.getSearch);

module.exports = router;