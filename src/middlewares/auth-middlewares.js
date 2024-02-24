const { StatusCodes } = require('http-status-codes');
const { errorResponse } = require('../utils/common');
const AppError = require('../utils/errors/app-error');

function validateNote(req, res, next) {
    if(!req.body.title || !req.body.content) {
        errorResponse.message = 'something went wrong while validating note';
        errorResponse.error = new AppError(
         ['fields cannot be blank'], StatusCodes.BAD_REQUEST
        );
        return res.status(StatusCodes.BAD_REQUEST)
                    .json(errorResponse);
    }
    if(req.body.title.length < 3 || req.body.content.length < 4) {
        errorResponse.message = 'something went wrong while validating note';
        errorResponse.error = new AppError(
         ['title or content data is too low to create a note'], StatusCodes.BAD_REQUEST
        );
        return res.status(StatusCodes.BAD_REQUEST)
                    .json(errorResponse);
    }
    next();
}

function validateNoteEdit(req, res, next) {
    if(req.body.title && req.body.title.length < 3) {
        errorResponse.message = 'something went wrong while editing note';
        errorResponse.error = new AppError(
         ['title length is very less'], StatusCodes.BAD_REQUEST
        );
        return res.status(StatusCodes.BAD_REQUEST)
                    .json(errorResponse);
    }
    if(req.body.content && req.body.content.length < 4) {
        errorResponse.message = 'something went wrong while editing note';
        errorResponse.error = new AppError(
         ['content data is too low to edit a note'], StatusCodes.BAD_REQUEST
        );
        return res.status(StatusCodes.BAD_REQUEST)
                    .json(errorResponse);
    }
    next();
}

module.exports = {
    validateNote,
    validateNoteEdit
}