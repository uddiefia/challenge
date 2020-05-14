const express = require('express');
const commentsController = require('../controllers/comments');
const router = express.Router();

router.get('/',commentsController.getComments);


module.exports = router;