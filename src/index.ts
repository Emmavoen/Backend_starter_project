import express from "express";
import logger from "./utils/logger";
import morgan from "morgan";
import cookieParser from "cookie-parser";
import { createServer } from "http";
import connectDB from "./config/connectDB";

const app = express();
const server = createServer(app);
const port = process.env.PORT || 3000;

app.use(cookieParser());
app.use(express.json());

app.use(morgan("dev"));
app.get("/", (req, res) => {
  res.send("Api is running");
});

const startServer = async () => {
  try {
    await connectDB();
    server.listen(port, async () => {
      logger.info(`Server is listening on PORT:${port}`);
    });
  } catch (error) {
    logger.error(error);
  }
};

startServer();
