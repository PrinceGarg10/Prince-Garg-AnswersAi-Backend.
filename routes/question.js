const express = require("express");
const questionController = require("../controller/question-controller");
const authController = require("../controller/auth-controller");
const router = express.Router();

router.post("/", authController.authorizationCheck, questionController.askQuestion);
router.get("/:questionId", authController.authorizationCheck, questionController.getQuestionById);

module.exports = router;
