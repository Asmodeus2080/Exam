const { StatusCodes } = require('http-status-codes');
const { successResponse, errorResponse} = require('../utils/common');
const {OpenAIService} = require('../services');


async function createStudyMaterial(req, res) {
    console.log(req.body);
    try {
        const {topic, time, syllabus} = req.body;
        const data = await OpenAIService.getRoadMap(topic, time, syllabus);
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

module.exports = {
    createStudyMaterial,
}