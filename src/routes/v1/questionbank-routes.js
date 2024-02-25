const express = require('express');
const { QuestionBankController } = require('../../controllers');

const router = express.Router();

router.post('/', QuestionBankController.createQuestionBank);
router.get('/', QuestionBankController.getQs);

router.patch('/upvote', QuestionBankController.updateUpvote);

router.patch('/downvote', QuestionBankController.updateDownVote);

module.exports = router;  