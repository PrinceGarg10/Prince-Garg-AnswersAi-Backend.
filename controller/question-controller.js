const Question = require("../model/questionModel");
const { handleError } = require("../utis/handleError")
const { askQuestionFromAi } = require("../utis/chat-gpt-service")

const askQuestion = async (req, res, next) => {
    try {
        const bodyData = req.body
        if (!bodyData.question) {
            return res.status(400).json({
                message: "Question is manadatory. Please ask a question"
            })
        }
        bodyData.userId = bodyData.userId || req.currentUser.id

        const answer = await askQuestionFromAi(bodyData.question)
        if (!answer) {
            return res.status(404).json({
                message: "Unable to generate Answer"
            })
        }
        else {
            bodyData.answer = answer
            const addQuestion = await Question.createQuestion(bodyData)
            return res.status(201).json({
                data: answer
            })
        }

    }
    catch (err) {
        handleError(res, err)
    }

};


const getQuestionById = async (req, res) => {
    try {
        const questionId = req.params.questionId
        if (!questionId) {
            res.status(404).json({
                status: "Failed",
                message: "Question Not Found"
            })
        }
        else {
            const getQuestion = await Question.getQuestionById(questionId)
            res.status(201).json({
                status: "success",
                data: getQuestion
            })
        }
    } catch (err) {
        handleError(res, err)
    }
}


module.exports = { getQuestionById, askQuestion }