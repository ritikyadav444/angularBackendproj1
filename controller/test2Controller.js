const Test = require("../models/testModel");
// const Test = require("../models/testModel");

exports.createTest_two = async (req, res) => {
    const { test_name2, desc2, subject2 } = req.body;
    try {
        const test = await Test.create({
            test_name2,
            desc2,
            subject2
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