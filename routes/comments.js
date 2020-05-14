const express = require("express");
const { body } = require("express-validator/check");
const commentsController = require("../controllers/comments");
const router = express.Router();

router.get("/:workeffort/comments", commentsController.getAllComments);

router.post(
  "/:workeffort/comments",
  [body("comment").trim().isLength({ min: 6, max: 100 })],
  commentsController.postComment
);

router.delete(
  "/:workeffort/comments/:commentid",
  commentsController.deleteComment
);

module.exports = router;
