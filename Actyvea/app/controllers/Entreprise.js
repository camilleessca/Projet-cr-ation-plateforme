require('../models/entreprise');

var mongoose = require('mongoose'),
    Entreprise = mongoose.model('Entreprise');

var Entreprises = {
    index: function (req, res) {

        User.find({}, function (err, entreprises) {
            if (err) throw err;

            // object of all the users
            console.log(entreprises);
        });

        res.render('entreprise/index', {
            title: 'home',
            active: 'account'
        });
    },

    create: function (req, res) {

        var e = new Entreprise({
            entreprise: req.body.entreprise,
            siret: req.body.siret,
            nom: req.body.nom,
            email: req.body.email,
            pwd: req.body.pwd,
            pwdconf: req.body.pwdconf,
            telephone: req.body.telephone
        });

        e.save(function (err) {
            if (err) {
                throw(err);
            }
            console.log('L\'entreprise a été créée!');
            console.log(e);
        });
        res.send('Votre entreprise s\'est bien inscrite !');
        res.redirect('#');
    }
};

module.exports = Entreprises;
