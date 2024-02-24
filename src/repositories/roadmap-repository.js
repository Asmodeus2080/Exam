const CrudRepository = require('./crud-repository');
const Roadmap = require('../models/roadmap');

class RoadmapRepository extends CrudRepository {
    constructor() {
        super(Roadmap);
    }

    async getRp(id) {
        const rp = await Roadmap.findOne({
            _id : id,
        });
        return rp;
    }
};

module.exports = RoadmapRepository;