require("dotenv").config();
const axios = require('axios');

const host = `http://localhost:${process.env.PORT || 3000}${process.env.API_PREFIX || "/api/"}`
const askQuestion = `${host}questions`;
const getQuestion = `${host}questions/1`;
const login = `${host}auth/login`;

describe('Question Controller', () => {
    it('POST /api/questions should Generate the ai answer', async () => {
        try {
            const userLogin = await axios.post(login, {
                email: "test@gmail.com",
                password: "test",
            })
            const { token } = userLogin.data
            const question = {
                question: "What's your name ?",
            };

            const res = await axios.post(askQuestion, question, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });

            expect(res.status).toEqual(201);
            expect(res.data).toHaveProperty('data');
            expect(typeof res.data.data).toEqual('string');
        } catch (e) {
            throw new Error(e)
        }

    });

    it('GET /api/questions/:id should Get exist question and generated answer', async () => {
        try {
            const userLogin = await axios.post(login, {
                email: "test@gmail.com",
                password: "test",
            })
            const { token } = userLogin.data
            const res = await axios.get(getQuestion, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });

            expect(res.status).toEqual(201);
            expect(res.data).toHaveProperty('data');
            expect(res.data.data).toHaveProperty('answer');
            expect(res.data.data).toHaveProperty('question');
        } catch (e) {
            throw new Error(e)
        }

    });

});
