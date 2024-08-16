const mongoose = require("mongoose");
const test2Schema = new mongoose.Schema({
    test_name2: {
        type: String,
        required: [true, "Please Enter test Name"],
        default: "abc"
    },
    desc2: {
        type: String,
        required: true,
        default: "abc"
    },
    subject2: {
        type: String,
    },
    createdAt: {
        type: Date,
        default: Date.Now
    }


})
module.exports = mongoose.model("Test2", test2Schema);