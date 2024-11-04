import mongoose from "mongoose"

const connectingToMongoDB = async () => {
    try {
        await mongoose.connect(process.env.Mongo_DB_URI);
        console.log("Connected to MongoDB")
    } catch (error) {
        console.log("Error happend while connecting to MongoDB",error.message)
    }
}


export default connectingToMongoDB;