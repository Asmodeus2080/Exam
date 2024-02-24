const AppError = require('../utils/errors/app-error');
const  {GEMAI} = require('../config/server-config');
const { StatusCodes } = require('http-status-codes');
const { GoogleGenerativeAI } = require("@google/generative-ai");
const genAI = new GoogleGenerativeAI(GEMAI);
const model = genAI.getGenerativeModel({ model: "gemini-pro"});

async function getRoadMap(topic, time, syllabus) {
    try {
        console.log(topic, syllabus, time);
        const prompt = `give a roadmap on the topic ${topic} which includes these subtopics ${syllabus} that can be completed in total ${time} hours and give each day's hourly based roadmap. The roadmap should be structured and the output should be in json format, here is the example 
        {
            "topic": "Java Overloading",
            "total_hours": 5,
            "roadmap": [
              {
                "day": 1,
                "schedule": [
                  {
                    "hour": 1,
                    "topics": [
                      "Java Methods (Basics)",
                      "Introduction to Method Overloading",
                      "Compiler and Overloading"
                    ]
                  },
                  {
                    "hour": 2,
                    "topics": [
                      "Overloading with Different Parameter Types",
                      "Automatic Type Promotion",
                      "Practice: Writing Overloaded Methods"
                    ]
                  }
                ]
              },
              {
                "day": 2,
                "schedule": [
                  {
                    "hour": 1,
                    "topics": [
                      "Overloading with Different Number of Parameters",
                      "Practice: Variation in Parameter Lists"
                    ]
                  },
                  {
                    "hour": 2,
                    "topics": [
                      "Constructor Overloading",
                      "Overloading and Inheritance",
                      "Practice: Inheritance Scenario"
                    ]
                  }
                ]
              },
              {
                "day": 3,
                "schedule": [
                  {
                    "hour": 1,
                    "topics": [
                       "Review of Concepts", 
                       "Practice Challenges", 
                       "Ambiguities and Considerations (Optional)"
                    ]
                  }
                ]
              }
            ]
          }`;
        // console.log(prompt);
        const result = await model.generateContent(prompt);
        const response = await result.response;
        // console.log(response);
        const text = response.text();
        console.log(text);
        return text;
        
    } catch (error) {
        throw new AppError("Something went wrong try again later", StatusCodes.INTERNAL_SERVER_ERROR);
    }
    
}
module.exports = {
    getRoadMap,
}