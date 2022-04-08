const express = require("express");
const router = express.Router();
const homeController = require("./homeController");

router.get("/", homeController.getIndex); //Page d'accueil. Affiche toutes les données entrées. Revient sur cette page à chaque ajout ou modification de la base de données

router.get("/product/new", homeController.addProduct); //affiche le formulaire
router.post("/", homeController.saveAndRedirect); //valide les champs entrés dans le formulaire, sauve les bases de données et retourne vers l'index


router.get("/edit/:id", homeController.edit);
router.put("/edit/:id", homeController.updateAndRedirect);

router.delete("/delete/:id", homeController.delete);

router.get("/search", homeController.searchForm);
router.get("/giveResult", homeController.giveResult);




module.exports = router;









module.exports = router;