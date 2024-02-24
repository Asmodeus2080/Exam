const express = require('express');
const router = express.Router();

const SubtopicRoutes = require('./subtopic-routes');
const StudyMaterialRoutes = require('./studymaterial-routes');

router.use('/studyMaterial', StudyMaterialRoutes);
router.use('/subtopic', SubtopicRoutes);
const UserRoutes = require('./user-routes');
const StudyMaterialRoutes = require('./studymaterial-routes');

router.use('/studyMaterial', StudyMaterialRoutes);
router.use('/subtopic', SubtopicRoutes);
router.use('/user', UserRoutes);

module.exports = router;