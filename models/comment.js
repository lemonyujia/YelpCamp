var mongoose = require("mongoose");

var commentSchema = new mongoose.Schema({
   text: String,
   author: {
      id:{
         type: mongoose.Schema.Types.ObjectId,  // associate comment with user
         ref: "User"
      },
      username: String
   }
});

module.exports = mongoose.model("Comment", commentSchema);