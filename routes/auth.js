const express = require("express");
const authController = require("../controller/auth-controller");
const router = express.Router();

router.post("/refresh", authController.refreshToken);
router.post("/login", authController.login);
router.post("/logout", authController.logout);

module.exports = router;
