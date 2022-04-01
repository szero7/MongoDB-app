const express = require("express");
const router = express.Router();
const homeController = require("./homeController");

router.get("/", homeController.getIndex);
router.get("/product/new", homeController.addProduct); //affiche le formulaire
router.post("/product/new", homeController.saveProduct); //valide les champs entrés dans le formulaire, sauve les bases de données et affiche l'index
// router.get("/index", homeController.getIndex);
// router.get("/new", homeController.getNew);
// router.get("/search", homeController.getSearch);













module.exports = router;