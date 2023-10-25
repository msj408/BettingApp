import express from "express";
import connectDb from "./config/db.js";
import dotenv from "dotenv";
import userRoutes from "./routes/userRoutes.js";
import { notFound, errorHandler } from "./middlewares/errorMiddleware.js";
dotenv.config();
const app = express();
// to access the request body below
app.use(express.json());
connectDb();
app.get("/", (req, res) => {
  res.send("API is running...");
});

app.use("/api/users", userRoutes);
const port = process.env.PORT || 4000;
app.use(notFound);
app.use(errorHandler);
app.listen(port, () => console.log("server is listening on port ", port));
