const CrudRepository = require('./crud-repository');
const SubTopic = require('../models/subtopic');

class SubTopicRepository extends CrudRepository {
    constructor() {
        super(SubTopic);
    }
    
};

module.exports = SubTopicRepository;