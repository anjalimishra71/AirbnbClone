import mongoose from "mongoose";
const connectDb = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URL)
        console.log("Connecting to MongoDB URL:", process.env.MONGODB_URL); 
        // await mongoose.connect(process.env.MONGODB_URL);
        console.log("DB connected");
    } 

   catch (error) {
        console.log("DB Error:", error.message);
    }
}
export default connectDb;
