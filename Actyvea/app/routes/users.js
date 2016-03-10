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
})

//Création d'un nouvel utilisateur Particulier
/*action du formulaire Jade*/
router.post('/Inscription', users.create);
router.post('/Connexion', users.connect);
module.exports = router;
