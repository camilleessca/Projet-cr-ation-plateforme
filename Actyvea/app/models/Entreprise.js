var mongoose = require('mongoose'), // Nous appelons le module mongoose
    Schema = mongoose.Schema; // Nous créons un schéma mongoose


var schema = new Schema({
    entreprise: {type: String, required: true},
    siret: {type: String, required: true},
    nomRH: {type: String, required: true, unique: true},
    email: {type: String, required: true, unique: true},
    pwd: {type: String, required: true},
    pwdconf: {type: String, required: true},
    telephone: {type:String, required:true},
    createdOn: {type: Date, default: Date.now}
});

// Nous exportons notre modèle avec comme nom "Entreprise", 'entreprises' sera le nom de notre "table"
exports.model = mongoose.model('Entreprise', schema, 'entreprises');
