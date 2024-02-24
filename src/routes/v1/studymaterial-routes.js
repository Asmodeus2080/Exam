const express = require('express');
const router = express.Router();
const {StudyMaterialController} = require('../../controllers');

router.post('/', StudyMaterialController.createStudyMaterial);

router.get('/:id', StudyMaterialController.getAllTopicMaterialByUserId);

module.exports = router;