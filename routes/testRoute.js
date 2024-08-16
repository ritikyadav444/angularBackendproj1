const express = require("express");
const { isAuthenticatedUser } = require("../middleware/authentication");
const { createTest, getTest } = require("../controller/testController");
const router = express.Router();



router.route("/create").post(isAuthenticatedUser, createTest);
router.route("/getTest").get(isAuthenticatedUser, getTest)

module.exports = router