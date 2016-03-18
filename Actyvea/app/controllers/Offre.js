require('../models/offre');

var mongoose = require('mongoose'),
    Offre = mongoose.model('Offre');
var fs = require('fs-extra');
var multipart = require('connect-multiparty');
var multipartMiddleware = multipart();

var express = require('express');


var Offre = {
    insertOffre: function(nom,heure,langage,description,linkImage, res){
        console.log('L\'article a été inséré :'+nom );

        //Connexion à la base de donnée
        mongoose.connect('mongodb://localhost/actyvea',function(err) {
            //console.log("Mongo Returen "+err);
            if (err) {
                console.log("Erreur base de données : " + err);

                mongoose.connection.close();
                // Redirection et affichage d'erreur
                res.send("Un probleme technique lors de la connexion à la base de données!");
                return;
            }

            // Export du modèle
            var offre = mongoose.model('offre', schema, 'Offre');
            var offreData = new offre({
                nom:nom,
                heure:heure,
                langue:langue,
                description:description,
                linkImage:linkImage
            });

            offreData.save(function(err, article) {
                if(err){
                    console.log('Nom d\'article déjà utilisé ')
                    res.redirect('Offres');
                }
                else {
                    console.log(article);
                    console.log('Offre bien sauvegardé!');
                    res.redirect('/Offres');
                }
                mongoose.connection.close();
            });
        });
    },

    afficherOffres:function(req,res){
        mongoose.connect('mongodb://localhost/actyvea',function(err) {
            //console.log("Mongo Returen "+err);
            if (err) {
                console.log("Erreur base de données : " + err);

                mongoose.connection.close();
                // Redirection et affichage d'erreur
                res.send("Un probleme technique lors de la connexion à la base de données!");
                return;
            }

            console.log(__dirname);
            console.log(err);
            var Offre = mongoose.model('offre',schema, 'Offre');

            if(req.session.typeuser ==1){

                Offre.find(null,function(err,tabOffres){

                    console.log(tabOffres);
                    console.log('tu es un user x');
                    console.log(__dirname);
                    console.log(err);
                    console.log(err);

                    res.render('OffresUser', {'Offre':tabOffres});

                    /*if(typeuser==2){
                     res.render('Articles', {'Aschema':tableauArticles});

                     }*/

                    mongoose.connection.close();
                });
            }else if (req.session.typeuser ==2){
                Offre.find(null,function(err,tabOffres){
                    console.log(tabOffres);
                    console.log('tu es un Admin');
                    console.log(__dirname);
                    console.log(err);

                    console.log(err);

                    res.render('Offres', {'Offre':tabOffres});

                    /*if(typeuser==2){
                     res.render('Articles', {'Aschema':tableauArticles});

                     }*/

                    mongoose.connection.close();
                });
            }
        });
    },

    afficherOffres:function(req,lnom,res){
        mongoose.connect('mongodb://localhost/actyvea',function(err) {
            //console.log("Mongo Returen "+err);
            if (err) {
                console.log("Base Mongo Error : " + err);

                mongoose.connection.close();
                // Redirection et affichage d'erreur
                res.send("Un probleme technique lors de la connexion a la bdd");
                return;
            }

            var Offre = mongoose.model('offre', schema, 'Offre');

            if(req.session.typeuser ==1){

                Offre.find({ nom : lnom },function(err,tableauArticles){
                    console.log(__dirname);
                    res.render('OffresUser', {'schema':tabOffres});
                    mongoose.connection.close();
                });
            }

            else if(req.session.typeuser ==2){

                Offre.find({ nom : lnom },function(err,tabOffres){
                    console.log(__dirname);
                    res.render('Offre', {'schema':tabOffres});
                    mongoose.connection.close();
                });
            }
        });
    },

    SupprimerOffre:function (lnom, res) {

        mongoose.connect('mongodb://localhost/actyvea',function(err) {
            //console.log("Mongo Returen "+err);
            if (err) {
                console.log("Base Mongo Error : " + err);

                mongoose.connection.close();
                // Redirection et affichage d'erreur
                res.send("Un probleme technique lors de la connexion a la bdd");
                return;
            }

            var Offre = mongoose.model('offre', schema, 'Offre');

            Offre.remove({nom:lnom},function (err){
                mongoose.connection.close();
            });
        });

    },




    /*  }
     index: function (req, res) {

     Offre.find({}, function (err, offres) {
     if (err) throw err;

     // object of all the users
     console.log(offres);
     });

     res.render('offres/index', {
     title: 'home',
     active: 'account'
     });
     },

     create: function (req, res) {

     var o = new Offre({
     title: req.body.title,
     description: req.body.description
     //image: image
     });

     a.save(function (err) {
     if (err) {
     console.log(err);
     }
     console.log('Offre créé correctement');
     console.log(a);
     });

     recup = {
     title: req.body.title,
     description: req.body.description
     };
     console.log('Offre enregistré : ');
     console.log('Title: ' +recup.title);
     console.log('Container: ' +recup.description);
     res.redirect('http://localhost:3000/offres/liste');
     },

     affichage:function(res){
     mongoose.connect('mongodb://localhost/actyvea',function(err) {
     //console.log("Mongo Returen "+err);
     if (err) {
     console.log("Base Mongo Error : " + err);

     mongoose.connection.close();
     // Redirection et affichage d'erreur
     res.send("connexion a la base échec");
     return;
     }

     // -- Model Mongo

     var offres = mongoose.model('offre', schema, 'Offres');


     offres.find(null,function(err,tabListe){



     console.log(tabListe);
     console.log(__dirname);

     res.render('Offres', {'offres':tabListe});

     mongoose.connection.close();
     });
     });
     }
     */
};


module.exports = Offre;
