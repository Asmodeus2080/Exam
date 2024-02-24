const {UserRepository} = require('../repositories');
const userRepository = new UserRepository();
const AppError = require('../utils/errors/app-error');
const { StatusCodes } = require('http-status-codes');
const { Auth } = require('../utils/common');

async function createUser(data) {
  try {
    // console.log(data);
    let user = await userRepository.create({
      email : data.email,
      password : data.password,
      name : data.name,
    });
    // console.log("hiiii");
    const jwt = Auth.createToken({
      email : user.email,
      name : user.name,
      userId: user._id,
    });
    return jwt;
  } catch (error) {
    console.log(error);
    throw new AppError(
      'Cannot create a new User object',
      StatusCodes.INTERNAL_SERVER_ERROR
    );
  }
}

async function signin(data) {
  try {
    const user = await userRepository.getUserByEmail(data.email);
    if (!user) {
      throw new AppError(
        'No user found for the given email',
        StatusCodes.NOT_FOUND
      );
    }
    const passwordMatch = Auth.checkPassword(data.password, user.password);
    if (!passwordMatch) {
      throw new AppError('Invalid password', StatusCodes.BAD_REQUEST);
    }
    const jwt = Auth.createToken({
      name: user.name,
      email: user.email,
      userId: user._id,
    });
    return jwt;
  } catch (error) {
    if (error instanceof AppError) throw error;
    // console.log(error);
    throw new AppError(
      'Something went wrong',
      StatusCodes.INTERNAL_SERVER_ERROR
    );
  }
}

async function isAuthenticated(token) {
  try {
    if (!token) {
      throw new AppError('Missing JWT token', StatusCodes.BAD_REQUEST);
    }
    const response = Auth.verifyToken(token);
        // console.log("response after token verification : ", response);
    const user = await userRepository.get(response.userId);
      //  console.log('user details : ', user);
    if (!user) {
      throw new AppError('No user found', StatusCodes.NOT_FOUND);
    }
    return user._id;
  } catch (error) {
    if (error.name === 'JsonWebTokenError') {
      throw new AppError('Invalid JWT token', StatusCodes.BAD_REQUEST);
    }
    if (error.name === 'TokenExpiredError') {
      throw new AppError('JWT token expired', StatusCodes.BAD_REQUEST);
    }
    if(error instanceof AppError) throw error;
    throw new AppError(
      'Something went wrong',
      StatusCodes.INTERNAL_SERVER_ERROR
    );
  }
}

async function isAuthenticatedReset(id, token) {
  try {
    if (!token) {
      throw new AppError('Missing JWT token', StatusCodes.BAD_REQUEST);
    }
    const user = await userRepository.get(id);
    if(!user) {
      throw new AppError('No user found', StatusCodes.NOT_FOUND);
    }
    const response = Auth.verifyTokenReset(token, user.password);
    // console.log("response after token verification : ", response);
    return response.userId;
  } catch (error) {
    if (error.name === 'JsonWebTokenError') {
      throw new AppError('Invalid JWT token', StatusCodes.BAD_REQUEST);
    }
    if (error.name === 'TokenExpiredError') {
      throw new AppError('JWT token expired', StatusCodes.BAD_REQUEST);
    }
    if(error instanceof AppError) throw error;
    throw new AppError(
      'Something went wrong',
      StatusCodes.INTERNAL_SERVER_ERROR
    );
  }
}

async function getUserByUserId(id) {
  try {
    // console.log(id);
    const user = await userRepository.getUserByUserId(id);
    // console.log(user);
    if(!user) {
      throw new AppError('no user exist for this userId',StatusCodes.BAD_REQUEST);
    }
    return user;
  } catch (error) {
    // console.log(error);
    if(error instanceof AppError) throw error;
    throw new AppError(
      'Cannot fetch data of the user',
      StatusCodes.INTERNAL_SERVER_ERROR
    );
  }
}
module.exports = {
  createUser,
  signin,
  isAuthenticated,
  getUserByUserId,
  isAuthenticatedReset,
};


