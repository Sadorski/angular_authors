var mongoose = require('mongoose')

var AuthorSchema = new mongoose.Schema({
    name:  { type: String, required: true, minlength: [3, "Authors name should be at least 3 characters"]}
}, {timestamps: true });

module.exports = mongoose.model('Author', AuthorSchema);

var Author = mongoose.model('Author')