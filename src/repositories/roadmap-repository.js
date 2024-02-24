const CrudRepository = require('./crud-repository');
const Roadmap = require('../models/roadmap');

class RoadmapRepository extends CrudRepository {
    constructor() {
        super(Roadmap);
    }

    
};

module.exports = RoadmapRepository;