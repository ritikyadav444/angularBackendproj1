const express = require("express");
const { isAuthenticatedUser } = require("../middleware/authentication");
const { createTest_two } = require("../controller/test2Controller");
const router = express.Router();



router.route("/two").post(isAuthenticatedUser, createTest_two);

module.exports = router