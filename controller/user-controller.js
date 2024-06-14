const User = require("../model/userModel");
const Question = require("../model/questionModel");
const bcrypt = require("bcryptjs");
const { userSchema } = require("./auth-controller")
const { handleError } = require("../utis/handleError")

const createUser = async (req, res, next) => {
    try {
        console.log({body: req.body, req});
        const user = await User.getByEmail(req.body.email);
        if (!user) {
            const { error, value } = userSchema.validate(req.body);
            if (error){
                return res.status(400).json({
                    result: "failure",
                    message: error.message,
                });
            }

            const encryptedPassword = await bcrypt.hash(value.password, 12);
            const userData = {
                name: value.name,
                email: value.email,
                password: encryptedPassword,
            };
            const newUserId = await User.createUser(userData)[0];
            res.status(201).json({
                status: "success",
                message: "Account created Successfully ",
                data: {
                    id: newUserId,
                    name: value.name,
                    email: value.email,
                },
            });
        } else {
            return res
                .status(409)
                .json({ result: "failure", message: "user already exists" });
        }
    }
    catch (err) {
        handleError(res, err)
    }

};


const getUserDetailsById = async (req, res) => {
    try {
        const userId = req.params.userId
        if (!userId) {
            res.status(404).json({
                status: "Failed",
                message: "User Not Found"
            })
        }
        else {
            const getUser = await User.getUserById(userId)
            res.status(201).json({
                status: "success",
                data: getUser
            })
        }
    } catch (err) {
        handleError(res, err)
    }
}

const getAllQuestionOfUser = async (req, res) => {
    try {
        const userId = req.params.userId
        if (!userId) {
            res.status(404).json({
                status: "Failed",
                message: "User Not Found"
            })
        }
        else {
            const getUser = await Question.getAllQuestion({ userId })
            res.status(201).json({
                status: "success",
                data: getUser
            })
        }
    } catch (err) {
        handleError(res, err)
    }
}

module.exports = { getUserDetailsById, createUser, getAllQuestionOfUser }