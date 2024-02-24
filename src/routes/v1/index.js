const express = require('express');
const router = express.Router();

const noteRoutes = require('./roadmap-routes');
const StudyMaterialRoutes = require('./studymaterial-routes');

router.use('/studyMaterial', StudyMaterialRoutes);

module.exports = router;