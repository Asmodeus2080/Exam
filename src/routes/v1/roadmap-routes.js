const express = require('express');
const router = express.Router();
const { RoadmapController } = require('../../controllers');


router.get('/:id', RoadmapController.getRoadmap);

module.exports = router;