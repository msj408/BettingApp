import mongoose from "mongoose";

const connectDb = async () => {
  try {
    const connection = await mongoose.connect(
      "mongodb+srv://manbir410:bettingApp@bettingapp.1kcgvpn.mongodb.net/?retryWrites=true&w=majority"
    );
    console.log("mongoDB connected ", connection.connection.host);
  } catch (error) {
    console.error("error ", error.message);
  }
};

export default connectDb;
