const AppError = require("../utils/errors/app-error");
const { GEMAI } = require("../config/server-config");
const { StatusCodes } = require("http-status-codes");
const { GoogleGenerativeAI } = require("@google/generative-ai");
const genAI = new GoogleGenerativeAI(GEMAI);
const model = genAI.getGenerativeModel({ model: "gemini-pro" });
const { RoadmapRepository } = require("../repositories");
const { json } = require("express");
const { TopicRepository } = require("../repositories");
const topicRepository = new TopicRepository();
const roadmapRepo = new RoadmapRepository();

async function getRoadMap(topic, time, syllabus, userId) {
  try {
    console.log(topic, syllabus, time);
    const prompt = `give a roadmap on the topic ${topic} which includes these subtopics ${syllabus} that can be completed in total ${time} hours and give each topic's hourly based roadmap. The roadmap should be structured and the output should be in string format like this, here is the example 
{"subtopics": [{"title": "Subtopic 1","hours": 2},{"title": "Subtopic 2","hours": 2},{"title": "Subtopic 3","hours": 1}]},  just return it in a string, don't include any other unnecessary symbols or text, directly give the string that's all, no explanations`;
    // console.log(prompt);
    const result = await model.generateContent(prompt);
    const response = await result.response;
    // console.log(response);
    const text = response.text();
    console.log("text :", text);

    // Parse the JSON data
    const parsedData = JSON.parse(text);
    // console.log(parsedData);
    // Extract relevant information
    const subtopics = parsedData.subtopics;

    // Format into database-ready structure
    const formattedData = {
      subtopics: subtopics.map((subtopic) => ({
        title: subtopic.title,
        hours: subtopic.hours,
      })),
    };

    // Create a new entry in the Roadmap model
    const createdRoadmap = await roadmapRepo.create(formattedData);
    console.log('id : ', createdRoadmap._id);
    const tc = await topicRepository.makeTopic({
      title: topic,
      userId: userId,
      roadmap: createdRoadmap._id,
    });
    // Return the roadmap ID
    return createdRoadmap;
  } catch (error) {
    console.log(error);
    throw new AppError(
      "Something went wrong try again later",
      StatusCodes.INTERNAL_SERVER_ERROR
    );
  }
}
module.exports = {
  getRoadMap,
};
