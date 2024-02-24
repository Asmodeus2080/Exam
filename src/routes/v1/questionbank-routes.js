const express = require('express');
const { QuestionBankController } = require('../../controllers');

const router = express.Router();

router.post('/', QuestionBankController.createQuestionBank);

module.exports = router;  