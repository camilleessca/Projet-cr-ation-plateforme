require('../models/User');

var mongoose = require('mongoose'),
    User = mongoose.model('User');


var Users = {
    index: function (req, res) {

        User.find({}, function (err, users) {
            if (err) throw err;

            // object of all the users
            console.log(users);
        });

        res.render('users/index', {
            title: 'home',
            active: 'account'
        });
    },
    create: function (req, res) {

      var u = new User({
          nom: req.body.nom,
          prenom: req.body.prenom,
          anniversaire:req.body.anniversaire,
          email: req.body.email,
          pwd: req.body.pwd,
          pwdconf:req.body.pwdconf,
          situation: req.body.situation,
          adresse:req.body.adresse,
          codePostal:req.body.codePostal,
          ville: req.body.ville,
          telephone: req.body.telephone,
        });
//
           u.save(function (err) {
            if (err) {
                throw err;
            }
            console.log('Un User a été crée!');
            console.log(u);
        });
         //res.json(u);
        res.send  ('Vous vous êtes bien inscrit !');
        console.log(u);

    },
  update: function (req, res) {

        User.findById(req.params.id, function (err, user) {
            if (err) throw err;


            // change the users location
            user.name = req.body;

            // save the user
            user.save(function (err) {
                if (err) throw err;

                console.log('User successfully updated!');
            });

        });

        res.render('users/update');
    },
            //delete the user
    delete: function (req, res) {

        User.findById(req.params.id, function (err, user) {
            if (err) throw err;

            // delete him
            user.remove(function (err) {
                if (err) throw err;

                console.log('User successfully deleted!');
            });
        });

        res.render('users/delete');
    },


       //Fonction connect
        connect : function(req, res){

        //Verification des infos dans la base de données activea

        connect_json = {
            email : req.body.email,
            password: req.body.password
            };
        console.log('infos rentrées : ');
        console.log('email : ' + connect_json.email);
        console.log('pwd : ' + connect_json.pwd);

            //Etape 1 : chercher l'user dans la base données
            User.findOne({'email' : connect_json.email, 'pwd' : connect_json.pwd},                         function(err, checkUsers){
                    if(!checkUsers){
                        console.log('User introuvable!');
                        res.send('Il y a une erreur dans le l\'email ou le mot de passe');
                    // redirection vers page d'inscription
                        res.render('inscriptionU');
                    }
                    else{//Verification mot de passe
                        //on stock ce que l'user a tapé dans une variable
                        var pwd = req.body.pwd;
                        var eml = req.body.email;
                        //on stock le mot de passe de la base de données
                        var checkPass = checkUsers.pwd;
                        var checkMail = checkUsers.email;
                        //on compare les deux
                      if(pwd == checkPass && eml==checkMail){
                          // on entre l'User en session
                          req.session.email=checkUsers.email;
                      };
                        res.redirect('http://localhost:3000/users/acceuilU');
                    }
                });


            },
            //Deconnexion + redirection vers la page deconnexion
             disconnect : function(req, res){
                req.session.destroy();
                 res.render('deconnexion');
                 console.log('L\'user s\'est deconnecté');
            }
        };

module.exports = Users;
