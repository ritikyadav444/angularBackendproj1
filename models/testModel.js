const mongoose = require("mongoose");
const testSchema = new mongoose.Schema({
    test_name: {
        type: String,
        required: [true, "Please Enter test Name"],
        default: "abc"
    },
    desc: {
        type: String,
        required: true,
        default: "abc"
    },
    subject: {
        type: String,
    },
    createdAt: {
        type: Date,
        default: Date.Now
    }


})
module.exports = mongoose.model("Test", testSchema);