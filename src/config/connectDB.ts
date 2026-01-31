import mongoose from "mongoose";
import logger from "../utils/logger";
import { env } from "./env.Config";

const connectDB = async () => {
  if (mongoose.connection.readyState === 1) {
    logger.info("DB already connected");
    return;
  }

  try {
    logger.info("Connecting...");
    await mongoose.connect(env.MONGO_URL, {
      dbName:
        env.NODE_ENV === "production"
          ? "Haven-Lease"
          : "Haven-Lease-Staging-demo",
      // "Haven-Lease",
    });
    logger.info("DB Connected!");
  } catch (error) {
    logger.error(error, "MongoDB connection error");
    throw error;
  }
};

export default connectDB;
