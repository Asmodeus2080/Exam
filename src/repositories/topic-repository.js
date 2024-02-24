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
    async makeTopic(data) {
        try {
            const topic = await Topic.create(data);
            return topic
        } catch (error) {
            throw error;
        }
    }
    async getTopicsByUserId(data) {
        try {
            const topics = await Topic.find({
                userId : data.id,
            });
            return topics;
        } catch (error) {
            throw error;
        }
    }
};

module.exports = TopicRepository;