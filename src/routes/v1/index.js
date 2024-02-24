const express = require('express');
const router = express.Router();

const SubtopicRoutes = require('./subtopic-routes');
const StudyMaterialRoutes = require('./studymaterial-routes');
const UserRoutes = require('./user-routes');
const QuestionBankRoutes  = require('./questionbank-routes');
const RoadmapRoutes = require('./roadmap-routes');

router.use('/subtopic', SubtopicRoutes);
router.use('/studyMaterial', StudyMaterialRoutes);
router.use('/user', UserRoutes);
router.use('/questionBank', QuestionBankRoutes);
router.use('/roadmap', RoadmapRoutes);

module.exports = router;