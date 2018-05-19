const mongoose = require('mongoose')
var Author = require('../models/author')
const authors = require('../controllers/authors')
var path = require('path');
module.exports = function(app){
    app.get('/authors', function(req, res) {
        authors.index(req, res);
    })
    app.post('/authors', function(req, res) {
        authors.create(req, res);
    })

    app.get('/authors/:id', function(req, res) {
        authors.show(req, res);
    })
    app.put('/authors/:id', function(req, res) {
        authors.update(req, res);
    })
    app.delete('/authors/:id', authors.destroy);
    
    app.all("*", (req,res,next) => {
        res.sendFile(path.resolve("./public/dist/public/index.html"))
    });

}