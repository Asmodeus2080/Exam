const mongoose = require('mongoose');

const topicSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        minlength: [3],
    },
    
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
    },

    roadmap : {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Roadmap",
    }
    
},
    {timestamps: true}
);

module.exports = mongoose.model('Topic', topicSchema);