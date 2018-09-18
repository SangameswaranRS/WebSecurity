/* Author Sangameswaran R S */

var express = require('express');
var app = express();
var logger = require('morgan');
var bodyParser = require('body-parser');
var routerIndex = require('./Routes/indexRoutes');
var port = 1616;    

/* Middleware Inclusions */
app.use(logger('dev'));
app.use(bodyParser.urlencoded({extended: true,limit :'50mb'}));
app.use(bodyParser.json({limit: '50mb'}));
app.use(bodyParser.json({type:'application/vnd.api+json'}));
var routes = routerIndex(app);


app.listen(port);
console.log('Listening to Requests at port '+port);
console.log('-------------------------------------');
module.exports = app;