// this file will consist of code for database connection
const mongoose= require('mongoose');
const dotenv = require('dotenv');
dotenv.config();
// Load environment variables from .env file
// Connect to MongoDB using Mongoose
const uri=process.env.MONGO_URI;  //fetches url from .env file

const connectDB = async () => {
    try {
        await mongoose.connect(uri, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log("MongoDB connected");
    } catch (error) {
        console.error("MongoDB connection error:", error);
        process.exit(1);
    }
};

module.exports = connectDB;
