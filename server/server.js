import express from "express";
import connectDb from "./config/db.js";
const app = express();
connectDb();
app.listen(4000, () => console.log("server is listening on port 4000"));
