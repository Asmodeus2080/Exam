const CrudRepository = require('./crud-repository');
const Topic = require('../models/topic');

class TopicRepository extends CrudRepository {
    constructor() {
        super(Topic);
    }

    async getTopicByTitle(title) {
        try {
            const topic = await Topic.findOne({
                title: title,
            });
            return topic;
        } catch (error) {
            throw error;
        }
    }
};

module.exports = TopicRepository;