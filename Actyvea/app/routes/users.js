var express = require('express');
var router = express.Router();

// Nous allons récuperer notre controlleur fait précédement
var users = require('../controllers/User');
if (users) {console.log('récupération du controller User, terminé!')};

/*GET Récupère la liste des utilisateurs
router.get('/userlist', users.index);*/

/* GET users listing. */
router.get('/', function(req, res) {
  res.render('inscriptionU');
  console.log('La page d\'inscription des Users a été affiché!');
});

router.get('/Connexion', function(req, res){
  res.render('connexion');
  console.log('la page de connexion a été affiché!');
});

router.get('/signinU', function(req, res){
  res.render('signinU');
  console.log('la page de connexion a été affiché!');
});

router.get('/signinE', function(req, res){
  res.render('signinE');
  console.log('la page de connexion a été affiché!');
});

router.get('/information', function(req, res) {
  res.render('information');
  console.log('La page d\'information a été affiché!');
});

router.get('/partenaire', function(req, res) {
  res.render('partenaire');
  console.log('La page des partenaires a été affiché!');
});

router.get('/contact', function(req, res) {
  res.render('contact');
  console.log('La page des contacts a été affiché!');
});

router.get('/profil', function(req, res) {
  res.render('profil');
  console.log('La page du profil a été affiché!');
});

router.get('/offre', function(req, res) {
  res.render('offreU');
  console.log('La page des offres a été affiché!');
});

router.get('/messagerie', function(req, res) {
  res.render('messagerieU');
  console.log('La page de messagerie a été affiché!');
});

router.get('/test', function(req, res) {
  res.render('test');
  console.log('La page de test a été affiché!');
});

//Création d'un nouvel utilisateur Particulier
/*action du formulaire Jade*/
router.post('/Inscription', users.create);
router.post('/Connexion_User', users.connect);

module.exports = router;
