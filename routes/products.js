const express = require("express");
const router = express.Router();
const homeController = require("./homeController");


router.get("/", homeController.getIndex); //Page d'accueil. Affiche toutes les données entrées. Revient sur cette page à chaque ajout ou modification de la base de données
router.get("/product/new", homeController.addProduct); //affiche le formulaire
router.post("/", homeController.saveProduct); //valide les champs entrés dans le formulaire, sauve les bases de données et retourne vers l'index

router.get("/:id", homeController.findOneProduct);














module.exports = router;