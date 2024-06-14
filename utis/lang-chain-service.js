const dotenv = require('dotenv');
dotenv.config();

const langChatAi = require('@langchain/openai');
const ChatOpenAI = langChatAi.ChatOpenAI


const askQuestionFromLandChain = async (question) => {
    const model = new ChatOpenAI({
        apiKey: process.env.LANG_CHAIN_API_KEY,
        modelName: "gpt-4-1106-preview",
    });
    const response = model.invoke("what is jan");
    return response
}

module.exports = { askQuestionFromLandChain }