const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const postSchema = new Schema({
  id: {
    type: Number,
    required: true,
  },
  work_effort_id: {
    type: Number,
    required: true,
  },
  comment: {
    type: String,
    required: true,
  },
  left_at: {
    type: String,
    required: true,
  },
  user_id: {
    type: Number,
    required: true,
  },
},{timestamps:true});


module.exports = mongoose.model('Post', postSchema);