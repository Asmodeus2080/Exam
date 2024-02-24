const mongoose = require('mongoose');
const { URL } = require('./server-config');

const connect = async () => {
    console.log(URL);
    await mongoose.connect(URL);
};

module.exports = {
    connect
}