const express = require('express');
const router = express.Router();

const UserRoutes = require('./user-routes');
const StudyMaterialRoutes = require('./studymaterial-routes');
const QuestionBankRoutes  = require('./questionbank-routes');

router.use('/studyMaterial', StudyMaterialRoutes);
router.use('/user', UserRoutes);
router.use('/questionBank', QuestionBankRoutes);

module.exports = router;