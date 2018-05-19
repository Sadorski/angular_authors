var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
app.use(bodyParser.json());
var path = require('path');
mongoose.Promise = global.Promise;
app.use(express.static(path.join(__dirname, 'public/dist/public')));
app.set('views', path.join(__dirname, 'client/views'));
require("./server/config/mongoose")()
require('./server/config/routes.js')(app)
app.listen(8000, function() {
    console.log("listening on port 8000");
})