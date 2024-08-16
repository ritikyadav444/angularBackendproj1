const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const userSchema = new mongoose.Schema({
    subject: {
        type: String,
        required: [true, "Please Enter user Name"],
        default: "abc"
    },
    email: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
})



userSchema.pre("save", async function (next) {
    if (!this.isModified("password")) {
        next();
    }
    this.password = await bcrypt.hash(this.password, 10);
});
userSchema.methods.getJWTToken = function () {
    return jwt.sign({ id: this._id }, process.env.JWT_SECRET, {
        expiresIn: process.env.JWT_EXPIRE
    });
};

userSchema.methods.comaprePassword = async function (password) {
    return await bcrypt.compare(password, this.password);
};

module.exports = mongoose.model("User", userSchema);