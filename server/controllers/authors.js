const mongoose = require('mongoose')
var Author = require('../models/author')

module.exports.index = function(req, res){
    Author.find({}, function(err, authors){
        if(err){
           console.log("Returned error", err);
            // respond with JSON
            res.json({message: "error", error: err})
        }
        else {
            // respond with JSON
            res.json({message: "success", data: authors})
        }
    })
}
module.exports.create = function(req, res){
    var author = new Author({name: req.body.name})
    author.save(function(err, newauthor){
        if(err){
            console.log(err.message)
            res.json({message: "error", error: err})
        } else {
            res.json({message: "success", data: newauthor})
        }
    })
}
module.exports.update = function(req, res){
    Author.findById(req.params.id, function(err, author){
        if (err) {
            console.log('hello')
            res.json({message: "error", error: err.message})
        } else {
            author.name = req.body.name
            author.save(function(err){
                if (err) {
                    console.log('unable to save')
                    console.log(err)
                    res.json({message: "error", error: err})
                } else {
                    res.json({message: "success", data: author})
                }
            })
        }
    })
}
module.exports.show = function(req, res){
    Author.findOne({_id: req.params.id}, function(err, author){
        if (err) {
            console.log('hello')
            res.json({message: "error", error: err})
        }
        res.json({message: "success", data: author})
    })
}
module.exports.destroy = function(req, res){
    Author.remove({_id: req.params.id}, function(err, author) {
        if (err) { 
            console.log(err);
            res.json({message: "error", error: err})
        }
        res.json({message: "success", data: author})
    })
}