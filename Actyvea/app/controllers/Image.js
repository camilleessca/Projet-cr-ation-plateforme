require('../models/Image');

var mongoose = require('mongoose'),
    Image = mongoose.model('Image');


var Images = {
    index: function (req, res) {

        Image.find({}, function (err, images) {
            if (err) throw err;

            // object of all the users
            console.log(images);
        });

        res.render('/images/upload', {
            title: 'home',
            active: 'account'
        });
    },
    create: function (req, res) {

        var i = new Image({
            nom: req.body.nom,
            fichier: req.body.fichier
        });
//
        u.save(function (err) {
            if (err) {
                throw err;
            }
            console.log('La fiche a été crée!');
            console.log(i);
        });
        //res.json(i);
        res.send('La fiche médicale est enregistré !');
        console.log(i);
    }
};

module.exports = Images;