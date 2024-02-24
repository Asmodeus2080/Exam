const mongoose = require('mongoose');

const roadmapSchema = new mongoose.Schema({

    subtopics: [
        {
            title: {
                type: String,
                required: true,
            },
            hours: {
                type: Number,
                required: true,
            },
        }
    ],
    
});

module.exports = mongoose.model('Roadmap', roadmapSchema);
