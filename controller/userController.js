const User = require("../models/userModel");
const sendToken = require("../utils/jwtTokens")

exports.register = (async (req, res, next) => {
    const body = req.body;
    try {
        const user = await User.create(body);
        res.status(201).json({
            success: true,
            user,
        });
    } catch (error) {
        console.log(error)
        res.status(500).json({
            messgae: "Not registered"
        })
    }
})

exports.getUser = (async (req, res, next) => {
    const users = await User.find();
    res.status(200).json({
        success: true,
        users,
    });
});

exports.loginUser = (async (req, res, next) => {
    const { email, password } = req.body;
    if (!email || !password) {
        return next("Please Enter Email & Password", 400);
    }
    const user = await User.findOne({ email }).select("+password");
    if (!user) {
        return next("Invalid Email or Password", 401);
    }
    const isPasswordMatched = await user.comaprePassword(password);
    if (!isPasswordMatched) {
        return next("Invalid email or passwrod", 401)
    }
    sendToken(user, 200, res);
    console.log("user Logged in")
});

exports.logout = (async (req, res, next) => {
    res.cookie("token ", '', {
        expires: new Date(Date.now()),
        httpOnly: true,
    });
    console.log("user logged out")
    res.status(200).json({
        success: true,
        messgae: "Logged Out"
    });
});