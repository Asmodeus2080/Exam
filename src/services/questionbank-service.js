const AppError = require('../utils/errors/app-error');
const  {GEMAI} = require('../config/server-config');
const { StatusCodes } = require('http-status-codes');
const { GoogleGenerativeAI } = require("@google/generative-ai");
const {QuestionBankRepository} = require('../repositories');

const questionBankRepository = new QuestionBankRepository();
const genAI = new GoogleGenerativeAI(GEMAI);
const model = genAI.getGenerativeModel({ model: "gemini-pro"});

async function getAnswer(question) {
    try {
        const prompt = `can you answer this question ${question} only provide the answer donot write the question again and try to answer this question with appropriate examples if possible`;
        console.log(prompt);
        const result = await model.generateContent(prompt);
        const response = await result.response;
        // console.log(response);
        const text = response.text();
        // console.log(text);
        const res = await questionBankRepository.create({
            question : question,
            answer : text
        });
        return res;
        
    } catch (error) {
        throw new AppError("Something went wrong, please try again later", StatusCodes.INTERNAL_SERVER_ERROR);
    }
       
}
module.exports = {
    getAnswer,
}