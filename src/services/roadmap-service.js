const { RoadmapRepository } = require('../repositories');
const roadmapRepository = new RoadmapRepository();
const AppError = require('../utils/errors/app-error');
const { StatusCodes } = require('http-status-codes');

async function getRoadmap(id) {
    try {
        const roadmap = await roadmapRepository.getRp(id);
        return roadmap;
    } catch (error) {
        throw new AppError('Something went wrong while fetching the roadmap', StatusCodes.INTERNAL_SERVER_ERROR);   
    }
}

module.exports = {
    getRoadmap
}