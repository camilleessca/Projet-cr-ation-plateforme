var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var session = require('express-session');

mongoose.connect('mongodb://localhost/actyvea', function(err) {
  if (err) { throw err; }
});

var routes = require('./app/routes/index');
var users = require('./app/routes/users');
var entreprises = require('./app/routes/entreprises');
var images = require('./app/routes/images');

var app = express();

//Server 1ere forme
//var http = require('http'); // on importe le module http

app.listen(3010); // Le serveur va donc écouter sur le port 3000
console.log("Server Actyvea at http://127.0.0.1:3000/");

// view engine setup
app.set('views', path.join(__dirname, 'app/views'));
app.set('view engine', 'jade');
app.locals.basedir = path.join(__dirname, 'public');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(session({
  secret: "any",
  saveUnitialized: true,
  resave:true,
  cookie:{
    secure:true
  }
}));

/*app.use('/#Url que je créee', #nomdelavariablequicontientlaroute);*/
app.use('/', routes);
app.use('/users', users);
app.use('/entreprises', entreprises);
app.use('/images', images);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});


module.exports = app;
