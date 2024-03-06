import express, { Request, Response} from "express";
import cors from "cors";
import "dotenv/config";
import mongoose from "mongoose";

mongoose.connect(process.env.MONGODB_CONNECTION_STRING as string);

const app = express();
// convert api requests to json
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
// cors for security
app.use(cors())

app.get("/api/test", async (req: Request, res:Response)=> {
    res.json({ message: "EXPRESS!!!!!!!!!!!!!!" });
});

app.listen(5000, () => {
    console.log("server is running on localhost:5000");
});