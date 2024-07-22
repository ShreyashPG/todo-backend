const dotenv = require('dotenv');
const mongoose = require('mongoose');
dotenv.config();

// const  app=express();

const mongoURL = process.env.MONGO_URL;// Correct variable name
console.log('Mongo URL:', mongoURL); 
const connectDB = async () => {
    try {
      await   mongoose.connect(mongoURL, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log('Connected to MongoDB');
    } catch (error) {
        console.error('Error connecting to MongoDB:', error);
        process.exit(1); // Exit process with failure
    }
};
//app.use(express.json());

module.exports=connectDB;