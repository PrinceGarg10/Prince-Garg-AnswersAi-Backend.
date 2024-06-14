// const axios = require('axios');
const OpenAI = require("openai");
const dotenv = require('dotenv');

// Load the API key from the .env file
dotenv.config();
const apiKey = process.env.CHAT_GPT_API_KEY;

const openai = new OpenAI({ apiKey });


// Function to get a response from ChatGPT
async function getChatGPTResponse(question) {
    if (!apiKey) {
        throw "Api Key is manadatory"
    }
    const messages = [
        { role: "system", content: "You are a helpful assistant." },
        { role: "user", content: question }
    ];

    try {
        const completion = await openai.chat.completions.create({
            model: "gpt-3.5-turbo",
            messages: messages,
        });

        const response = completion.choices[0].message.content
        return response
    } catch (error) {
        console.error('Error fetching response:', error);
        return 'Sorry, I could not get a response from the AI.';
    }
}

const askQuestionFromAi = async (question) => {
    const response = await getChatGPTResponse(question);
    return response
}

module.exports = { askQuestionFromAi }
