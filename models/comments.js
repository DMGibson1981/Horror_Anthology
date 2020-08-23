var mongoose = require("mongoose");

// SCHEMA SETUP!
var commentsSchema = new mongoose.Schema({
    name: String,
    work: String,
});

module.exports = mongoose.model("Comments", commentsSchema);