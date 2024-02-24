const dotenv = require('dotenv');

dotenv.config();

module.exports = {
    PORT : process.env.PORT,
    URL  : process.env.MONGO_URI, 
    GEMAI : process.env.GEM_AI_APK_KEY
}