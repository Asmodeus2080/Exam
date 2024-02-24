const express = require('express');
const router = express.Router();

const UserRoutes = require('./user-routes');
const StudyMaterialRoutes = require('./studymaterial-routes');

router.use('/studyMaterial', StudyMaterialRoutes);
router.use('/user', UserRoutes);

module.exports = router;