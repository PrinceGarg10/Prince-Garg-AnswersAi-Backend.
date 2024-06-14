const express = require("express");
const userController = require("../controller/user-controller");
const router = express.Router();

router.post("/", userController.createUser);
router.get("/:userId", userController.getUserDetailsById);
router.get("/:userId/questions", userController.getAllQuestionOfUser);

module.exports = router;
