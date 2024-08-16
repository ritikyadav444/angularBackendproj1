const express = require("express");
const { getUser, register, loginUser, logout } = require("../controller/userController");
const router = express.Router();



router.route("/register").post(register);
router.route("/get").get(getUser)
router.route("/login").post(loginUser)
router.route("/logout").get(logout)

module.exports = router