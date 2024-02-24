const express = require('express');
const { SubtopicController } = require('../../controllers');
const { AuthMiddlewares } = require('../../middlewares');
const router = express.Router();

router.post('/', SubtopicController.getContent);


module.exports = router;