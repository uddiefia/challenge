const express = require("express");
const commentsController = require("../controllers/comments");
const router = express.Router();

router.get("/:workeffort/comments", commentsController.getAllComments);

router.post("/:workeffort/comments", commentsController.postComment);

router.delete(
  "/:workeffort/comments/:commentid",
  commentsController.deleteComment
);

module.exports = router;
