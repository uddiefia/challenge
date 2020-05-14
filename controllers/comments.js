const Comment = require("../models/comment");
const { validationResult } = require("express-validator/check");

exports.postComment = (req, res, next) => {
    const erros = validationResult(req);
    if(!erros.isEmpty()){
        const error = new Error('Validation failed, comment length must be more than 6 and less than 100');
        error.statusCode = 422;
        throw error;
    }
  const cmmt = req.body.comment;
  const user_id = req.body.user_id;
  const work_effort_id = req.params.workeffort;
  const comment = new Comment({
    work_effort_id: work_effort_id,
    comment: cmmt,
    left_at: new Date(),
    user_id: user_id,
  });
  comment
    .save()
    .then((result) => {
      console.log(result);
      res.status(201).json({
        message: "Comment Creaed successfully",
        comment: result,
      });
    })
    .catch((err) => {
      if(!err.statusCode){
            err.statusCode=500;
      }
      next(err);
    });
};

exports.getAllComments = (req, res, next) => {
  const work_effort_id = req.params.workeffort;
  Comment.find()
    .where("work_effort_id")
    .equals(work_effort_id)
    .then((comments) => {
      console.log(comments);
      res.status(200).json({
        message: "Get Comments successfully",
        comments: comments,
      });
    })
    .catch((err) => {
      console.log(err);
    });
};

exports.deleteComment = (req, res, next) => {
  const work_effort_id = req.params.workeffort;
  const commentId = req.params.commentid;
  Comment.findByIdAndRemove(commentId)
    .where("work_effort_id")
    .equals(work_effort_id)
    .then((result) => {
      console.log(result);
      res.status(200).json({
        message:
          result != null
            ? "Deleted Comments successfully"
            : "No found any matches comments",
        comment: result,
      });
      els;
    })
    .catch((err) => {
      console.log(err);
    });
};
