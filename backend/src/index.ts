import express, { Request, Response} from "express";
import cors from "cors";
import "dotenv/config";
import mongoose from "mongoose";
import userRoutes from "./routes/users";

mongoose.connect(process.env.MONGODB_CONNECTION_STRING as string);

const app = express();
// convert api requests to json
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
// cors for security
app.use(cors())

// test this using API client
app.use("/api/users", userRoutes)

app.listen(5000, () => {
    console.log("SERVER IS RUNNING ON LOCALHOST: 5000");
});