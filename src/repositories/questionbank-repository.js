const CrudRepository = require('./crud-repository');
const questionBank = require('../models/questionbank');

class QuestionBank extends CrudRepository {
    constructor() {
        super(questionBank);
    } 
};

module.exports = QuestionBank;