const { StatusCodes } = require('http-status-codes');
const { successResponse, errorResponse} = require('../utils/common');
const { OpenAIService, SubtopicService } = require('../services');


async function getContent(req, res) {
    // console.log(req.body);
    try {
        const {title, duration, roadmap} = req.body;
        const data = await OpenAIService.getContent(title, duration, roadmap);
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
    getContent,
}