var express = require('express');
var router = express.Router();

//Nous allons récuperer notre controlleur fait précédement
var entreprises = require('../controllers/Entreprise');
if(entreprises){console.log('récupération du controller Entreprise, terminé!')};

router.get('/', function(req, res){
  res.render('inscriptionE');
});

//Création d'un nouvel utilisateur Entreprise
router.post('/Inscription_Entreprise',entreprises.create);

module.exports = router;
