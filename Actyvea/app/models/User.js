var mongoose = require('mongoose'), // Nous appelons le module mongoose
Schema = mongoose.Schema;

//Création schema
var schema = new Schema({
    nom: {type: String, required: true},
    prenom: {type: String, required: true},
    email: {type: String, required: true},
    anniversaire:{type: Date, required: true},
    pwd: {type: String, required: true,},
    pwdconf:{type: String, required: true},
    situation:{type: String, required: true},
    adresse:{type: String, required: true},
    codePostal:{type: String, required: true},
    ville:{type: String, required: true},
    telephone: {type: String, required: true},
    createdOn: {type: Date, default: Date.now}
});

// Nous exportons notre modèle avec comme nom "User", 'users' sera le nom de notre "table"
exports.model = mongoose.model('User', schema, 'users');
