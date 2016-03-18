var express = require('express');
var router = express.Router();

//Nous allons récuperer notre controlleur fait précédement
var entreprises = require('../controllers/Entreprise');
if(entreprises){console.log('récupération du controller Entreprise, terminé!')};

router.get('/profil', function(req, res) {
  res.render('profilE');
  console.log('La page du profil a été affiché!');
});

router.get('/offre', function(req, res) {
  res.render('offreE');
  console.log('La page des offres a été affiché!');
});

router.get('/poster', function(req, res) {
  res.render('poster');
  console.log('La page de messagerie a été affiché!');
});

router.get('/messagerie', function(req, res) {
  res.render('messagerieE');
  console.log('La page de messagerie a été affiché!');
});

//Création d'un nouvel utilisateur Entreprise
router.post('/Inscription_Entreprise',entreprises.create);

module.exports = router;
