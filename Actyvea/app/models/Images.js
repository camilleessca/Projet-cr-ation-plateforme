var mongoose = require('mongoose'), // Nous appelons le module mongoose
    Schema = mongoose.Schema;

//Création schema
var schema = new Schema({
    nom: {type: String, required: true},
    fichier: {type: String, required: true},
    createdOn: {type: Date, default: Date.now}
});

// Nous exportons notre modèle avec comme nom "Image", 'images' sera le nom de notre "table"
exports.model = mongoose.model('Image', schema, 'images');
