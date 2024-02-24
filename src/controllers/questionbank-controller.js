const { StatusCodes } = require('http-status-codes');

const {QuestionBankService} = require('../services');

const { successResponse, errorResponse } = require('../utils/common');


async function createQuestionBank(req, res) {
    try {
        const data = await QuestionBankService.getAnswer(req.body.question);
        successResponse.data = data;
        return res
                .status(StatusCodes.CREATED)
                .json(successResponse);

    }
    catch(error) {
        errorResponse.error = error;
        return res
                .status(error.statusCode)
                .json(errorResponse);
    }
}

module.exports = {
    createQuestionBank,
}