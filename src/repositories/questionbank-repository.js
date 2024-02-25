const CrudRepository = require('./crud-repository');
const questionBank = require('../models/questionbank');

class QuestionBank extends CrudRepository {
    constructor() {
        super(questionBank);
    } 
    async updateUpvote(data) {
        const upvote = await questionBank.findByIdAndUpdate(
            {_id : data.id},
            {"$inc": {"upvote":1}},
            {new: true}
        );
        return upvote;
    }
    async updateDownVote(data) {
        const upvote = await questionBank.findByIdAndUpdate(
            {_id : data.id},
            {"$inc": {"downvote":1}},
            {new: true}
        );
        return upvote;
    }
};

module.exports = QuestionBank;