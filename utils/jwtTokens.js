const sendToken = (user, statusCode, res) => {
    const token = user.getJWTToken();
    const options = {
        expires: new Date(
            Date.now() + 10 * 1000
        ),
        httpOnly: true,
    };
    res.status(statusCode).cookie("token", token, options).json({
        success: true,
        user: {
            user,
            token,
        }


    });

};
module.exports = sendToken;