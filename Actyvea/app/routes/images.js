var express = require('express');
var router = express.Router();

router.get('/',function(req,res){
	res.send('Image Route');
});

router.get('/upload',function(req,res){
	res.render('form');
});

router.post('/upload', function(req,res){

var multiparty = require('multiparty');
var form = new multiparty.Form();

	form.parse(req, function(err, fields, files){
		var img = files.images[0];
		var fs = require('fs');

		fs.readFile(img.path, function(err, data){
			var path = './public/images/'+img.originalFilename;

			fs.writeFile(path, data, function(error){
				if(error) console.lo(error);
				res.send('Upload réussi!')					
			});
		});
	});
});

module.exports = router;