const { StatusCodes } = require('http-status-codes');

const { UserService } = require('../services');

const { successResponse, errorResponse } = require('../utils/common');

async function getUser(req, res) {
    try {
        const user = await UserService.getUser(req.params.id);
        successResponse.data = user;
        return res
                .status(StatusCodes.OK)
                .json(successResponse);
    } catch(error) {
        //console.log(error)
        errorResponse.error = error;
        return res
                .status(error.statusCode)
                .json(errorResponse);
    }
}

/**
 * POST : /signup
 * req-body {email: 'xyz@gmail.com', password: '1jkj1'}
 */

async function createUser(req, res) {    // signup
    console.log(req.body);
    try {
        const user = await UserService.createUser({
            email : req.body.email,
            password : req.body.password,
            name : req.body.name,
        });
        successResponse.data = user;
        return res
                .status(StatusCodes.CREATED)
                .json(successResponse);

    }
    catch(error) {
        // console.log(error)
        errorResponse.error = error;
        return res
                .status(error.statusCode)
                .json(errorResponse);
    }
}

async function signin(req, res) {
    try {
        // console.log(res.body);
        const user = await UserService.signin({
            email: req.body.email,
            password: req.body.password,
        });
        // console.log(user);
        successResponse.data = user;
        return res
                .status(StatusCodes.CREATED)
                .json(successResponse);
    } catch (error) {
        // console.log(error)
        errorResponse.error = error;
        return res
                .status(error.statusCode)
                .json(errorResponse);
    }
}

async function deleteUser(req, res) {
    try {
        const user = await UserService.deleteUser(req.params.id);
        successResponse.data = user;
        return res
                .status(StatusCodes.OK)
                .json(successResponse);
    } catch (error) {
        errorResponse.error = error;
        return res
                .status(error.statusCode)
                .json(errorResponse);
        
    }
}

module.exports = {
    getUser,
    createUser,
    signin,
    deleteUser,
}