const mongoose = require("mongoose");
const connectDatabase = () => {
    mongoose.connect("Put-your-db-link").then(

        (data) => {
            console.log(`Mongodb connected server:${data.connection.host}`);

        });
};
module.exports = connectDatabase