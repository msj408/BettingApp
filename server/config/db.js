import mongoose from "mongoose";

const connectDb = async () => {
  try {
    const connection = await mongoose.connect(process.env.MONGO_URI);
    console.log("mongoDB connected ", connection.connection.host);
  } catch (error) {
    console.error("error ", error.message);
  }
};

export default connectDb;
