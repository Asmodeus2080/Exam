const { StatusCodes } = require('http-status-codes');
const {  } = require('../services');
const { successResponse, errorResponse } = require('../utils/common');

async function createNote(req, res) {
    try {
        const note = await NoteService.createNote(req.body);
        successResponse.data = note;
        return res.status(StatusCodes.CREATED)
                    .json(successResponse);
    } catch (error) {
        errorResponse.error = error;
        return res.status(error.statusCode)
                    .json(errorResponse);
    }
}

async function getAllNotes(req, res) {
    try {
        const notes = await NoteService.getAllNotes();
        successResponse.data = notes;
        return res.status(StatusCodes.OK)
                    .json(successResponse);
    } catch (error) {
        errorResponse.error = error;
        return res.status(error.statusCode)
                    .json(errorResponse);
    }
}

async function getNote(req, res) {
    try {
        const note = await NoteService.getNote(req.params.id);
        successResponse.data = note;
        return res.status(StatusCodes.OK)
                    .json(successResponse);
    } catch (error) {
        errorResponse.error = error;
        return res.status(error.statusCode)
                    .json(errorResponse);
    }
}

async function getNoteByTitle(req, res) {
    try {
        const note = await NoteService.getNoteByTitle(req.params.title);
        successResponse.data = note;
        return res.status(StatusCodes.OK)
                    .json(successResponse);
    } catch (error) {
        errorResponse.error = error;
        return res.status(error.statusCode)
                    .json(errorResponse);
    }
}

async function updateNote(req, res) {
    try {
        const note = await NoteService.updateNote(req.params.id, req.body);
        successResponse.data = note;
        return res.status(StatusCodes.OK)
                    .json(successResponse);
    } catch (error) {
        errorResponse.error = error;
        return res.status(error.statusCode)
                    .json(errorResponse);
    }
}

async function deleteNote(req, res) {
    try {
        const note = await NoteService.deleteNote(req.params.id);
        successResponse.data = note;
        return res.status(StatusCodes.OK)
                    .json(successResponse);
    } catch (error) {
        errorResponse.error = error;
        return res.status(error.statusCode)
                    .json(errorResponse);
    }
}

module.exports = {
    createNote,
    getAllNotes,
    getNote,
    getNoteByTitle,
    updateNote,
    deleteNote
}