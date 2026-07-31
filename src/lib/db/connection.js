import mongoose from "mongoose";

const getMongoUri = () => process.env.MONGO_URI || process.env.MONGO_URL;

const connect = async () => {
  const uri = getMongoUri();
  
  if (!uri) {
    console.warn("MongoDB connection warning: Neither MONGO_URI nor MONGO_URL is set in environment variables.");
    throw new Error("MongoDB URI missing");
  }

  const connectionState = mongoose.connection.readyState;

  if (connectionState === 1) {
    return;
  }

  if (connectionState === 2) {
    return;
  }

  try {
    await mongoose.connect(uri, {
      dbName: "Metafab",
      bufferCommands: true,
    });
    console.log("Connected to MongoDB successfully");
  } catch (error) {
    console.error("MongoDB connection error:", error.message);
    throw error;
  }
};

export default connect;