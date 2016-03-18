var express = require('express');
var router = express.Router();

//Nous allons récuperer notre controlleur fait précédement
var offres = require('../controllers/Offre');
if (offres) {console.log('récupération du controller Offre, terminé!')};

router.post('/Poster', offres.insertOffre);
router.get('/offre', offres.afficherOffres);
router.get('/SuppOffre', offres.SupprimerOffre);

module.exports = router;