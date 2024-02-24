const dotenv = require('dotenv');

dotenv.config();

module.exports = {
    PORT : process.env.PORT,
    URL  : process.env.MONGO_URI, 
    GEMAI : process.env.GEM_AI_APK_KEY,
    JWT_SECRET : process.env.JWT_SECRET,
    JWT_EXPIRY : process.env.JWT_EXPIRY,
}