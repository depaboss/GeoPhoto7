var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');

var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/PlanetPhotos', function(err){
  if(err){
    throw err;
  }
  console.info("database connesso");
});

var app = express();

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

app.use(require('serve-favicon')(path.join(__dirname,"..","client","favicon.ico")));


app.use('/', express.static(path.join(__dirname, '..', 'client')));

app.use('/scripts', express.static(path.join(__dirname, '..', 'node_modules')));
app.use('/bundle', express.static(path.join(__dirname, '..', 'build', 'App')));
app.use('/vendor', express.static(path.join(__dirname, '..', 'build','vendors')));
app.use('/App', express.static(path.join(__dirname, '..', 'build')));
app.use('/view', express.static(path.join(__dirname, '..', 'build', 'view')));

//API
app.use('/planet',require('./planet'));


app.get('/*',function(req, res){
  res.sendFile(path.join(__dirname,"..","build","index.html"));
});

app.listen(3000, function(){
  console.log('server express start on: http://localhost:' + 3000);
})

livereload = require('livereload');
server = livereload.createServer();
server.watch(path.join(__dirname, '..', 'client', '**', '*'));
