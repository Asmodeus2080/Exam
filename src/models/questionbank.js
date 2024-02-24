const mongoose = require('mongoose');

const questionBankSchema = new mongoose.Schema({
            question: {
                type: String,
                required: true,
            },
            answer: {
                type : String,
            },
            upvote : {
                type : Number,
                default : 0,
            },
            downvote : {
                type : Number,
                default : 0,
            }
        
        },
    {timestamps: true}
);

module.exports = mongoose.model('QuestionBank', questionBankSchema);