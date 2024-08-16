const Test = require("../models/testModel");
// const Test = require("../models/testModel");

exports.createTest = async (req, res) => {
    const { test_name, desc, subject } = req.body;
    try {
        const test = await Test.create({
            test_name,
            desc,
            subject
        });
        res.status(201).json({
            success: true,
            test,
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({
            message: "Not created"
        });
    }
};

exports.getTest = (async (req, res, next) => {
    const tests = await Test.find();
    res.status(200).json({
        success: true,
        tests,
    });
});