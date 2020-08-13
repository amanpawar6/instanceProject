const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
    
    "userpost":String,
    "userid":String,
    "time":String

});



const post = mongoose.model('postdetails', postSchema);

module.exports = post;