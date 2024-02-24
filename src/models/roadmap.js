const mongoose = require('mongoose');

const roadmapSchema = new mongoose.Schema({
    days: [
        {
            day: {
                type: Number,
                required: true,
            },
            hours: {
                type: Number,
                required: true,
            },
            subtopics: [subtopicSchema],
        },
    ],
    
},
    {timestamps: true}
);

module.exports = mongoose.model('Roadmap', roadmapSchema);