const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const postSchema = new Schema(
  {
    work_effort_id: {
      type: Number,
      required: true,
    },
    comment: {
      type: String,
      required: true,
      lowercase: true,
    },
    left_at: {
      type: Date,
      required: true,
    },
    user_id: {
      type: Number,
      required: false,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Comment", postSchema);
