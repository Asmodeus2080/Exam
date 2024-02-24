const mongoose = require('mongoose');

const subtopicSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    duration: {
        type: Number,
        required: true,
    },
    content : {
        type: String,
        required: true,
    },
    roadmap : {
        type: mongoose.Schema.Types.ObjectId,
        ref : 'Roadmap'
    },
});

module.exports = mongoose.model('Subtopic', subtopicSchema);