const express = require('express');
const { UserController } = require('../../controllers');
const { AuthMiddlewares } = require('../../middlewares');

const router = express.Router();

router.get('/:id', UserController.getUser);

router.post('/signup', AuthMiddlewares.validateAuthRequest,
                       AuthMiddlewares.checkOwner,
                       UserController.createUser);

router.post('/signin',
                AuthMiddlewares.validateAuthRequest,
                // AuthMiddlewares.verifyRole('user'),
                UserController.signin);

router.delete('/:id',UserController.deleteUser);

module.exports = router;    