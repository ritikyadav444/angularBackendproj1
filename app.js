const express = require('express')
const app = express();
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser');

const dotenv = require('dotenv');
dotenv.config({ path: './config/config.env' });

app.use(express.json())
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cookieParser());

const users = require("./routes/userRoutes");
const tests = require("./routes/testRoute");
const tests2 = require("./routes/test2Route");

app.use("/api/", tests2);
app.use("/api/", tests);
app.use("/api/", users);

module.exports = app