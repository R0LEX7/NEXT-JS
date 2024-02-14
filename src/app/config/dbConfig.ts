import { log } from "console";
import mongoose from "mongoose";

export const connect = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL!);
    const connection = mongoose.connection;
    connection.on("connection", () => {
      console.log("====================================");
      console.log("MongoDB connected successfully");
      console.log("====================================");
    });

    connection.on("error", (err) => {
      console.log("====================================");
      console.log("MongoDB connection error ", err);
      console.log("====================================");
    });
  } catch (error) {
    console.log("error in connecting db : ", error);
  }
};
