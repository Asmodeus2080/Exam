const { StatusCodes } = require('http-status-codes');
const { successResponse, errorResponse} = require('../utils/common');
const {OpenAIService} = require('../services');


async function createStudyMaterial(req, res) {
    // console.log(req.body);
    try {
        const {title, time, syllabus, userId} = req.body;
        const data = await OpenAIService.getRoadMap(title, time, syllabus, userId);
        successResponse.data = data;
        return res.status(StatusCodes.CREATED)
                    .json(successResponse);
    } catch (error) {
        console.log(error);
        errorResponse.error = error;
        return res.status(error.statusCode)
                    .json(errorResponse);
    }
}

async function getAllTopicMaterialByUserId(req, res) {
    try {
        const topics = await OpenAIService.getAllTopicByUserId({
            id : req.params.id,
        });
        successResponse.data = topics;
        return res.status(StatusCodes.CREATED)
                    .json(successResponse);
    } catch (error) {
        errorResponse.error = error;
        return res.status(error.statusCode)
                    .json(errorResponse);
    }
}

module.exports = {
    createStudyMaterial,
    getAllTopicMaterialByUserId
}