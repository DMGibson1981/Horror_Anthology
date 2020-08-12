var mongoose = require("mongoose");

// SCHEMA SETUP!
var authorSchema = new mongoose.Schema({
    name: String,
    genre: String,
});

module.exports = mongoose.model("author", authorSchema);