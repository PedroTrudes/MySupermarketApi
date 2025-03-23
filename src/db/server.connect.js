require("dotenv").config();
const mongoose = require("mongoose");

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log("Conected with mongoDB");
    } catch (error) {
        console.error("Not found conection with Mongo DB");
        process.exit(1);
    }
}

module.exports = connectDB;