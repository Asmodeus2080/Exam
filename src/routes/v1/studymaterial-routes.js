const express = require('express');
const router = express.Router();
const {StudyMaterialController} = require('../../controllers');

router.post('/', StudyMaterialController.createStudyMaterial);

module.exports = router;