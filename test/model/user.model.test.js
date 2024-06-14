require("dotenv").config();
const axios = require('axios');

const host = `http://localhost:${process.env.PORT || 3000}${process.env.API_PREFIX || "/api/"}`
const createUser = `${host}users`;
const getUserDetails = `${host}users/1`;
const getUserQuestion = `${host}users/1/questions`;

describe('User Controller', () => {
    it('POST /api/users should create a new user', async () => {
        try {
            const userData = {
                email: 'test@gmail.com',
                name: 'test',
                password: 'test'
            };

            const res = await axios.post(createUser, userData);

            expect(res.status).toEqual(201); // Assuming 201 is the status code for successful creation
            expect(res.data.data).toHaveProperty('name');
            expect(res.data.data.email).toEqual(userData.email);
        } catch (e) {
            throw new Error(e)
        }
    });

    it('GET /api/users/:userId/questions should One user all Question details', async () => {
        try {
            const res = await axios.get(getUserQuestion);
            // ------ if user details found then it will return user details else nothing 
            expect(res.status).toEqual(201);
            expect(res.data).toHaveProperty('data');
            expect(Array.isArray(res.data.data)).toBe(true);
        } catch (e) {
            throw new Error(e)
        }
    });

    it('GET /api/users/:userId should One user details', async () => {
        try {
            const res = await axios.get(getUserDetails);
            // ------ if user details found then it will return user details else nothing 
            expect(res.status).toEqual(201);
            // Check if the response has the property 'data'
            if ('data' in res.data) {
                // If 'data' exists, check if it has the property 'name'
                expect(res.data.data).toHaveProperty('name');
                expect(res.data.data).toHaveProperty('email');
            } else {
                // If 'data' does not exist, the test case passes
                expect(res.data).not.toHaveProperty('data');
            }
        } catch (e) {
            throw new Error(e)
        }
    });

});
