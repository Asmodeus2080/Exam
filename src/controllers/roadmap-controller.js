const { StatusCodes } = require('http-status-codes');
const { RoadmapService } = require('../services');
const { successResponse, errorResponse } = require('../utils/common');

async function getRoadmap(req, res) {
    try {
        const roadmap = await RoadmapService.getRoadmap(req.params.id);
        successResponse.data = roadmap;
        return res.status(StatusCodes.CREATED)
                    .json(successResponse);
    } catch (error) {
        console.log(error);
        errorResponse.error = error;
        return res.status(error.statusCode)
                    .json(errorResponse);
    }
}

module.exports = {
    getRoadmap
}