import express from "express";
const app = express();
import dotenv from "dotenv";
import cors from "cors"
import { connectDB } from "./config/db.js";

dotenv.config();

app.use(cors());
app.use(express.json())

connectDB();

app.get("/", (req,res)=>{
    res.send("This is a server")
})

const PORT = process.env.PORT || 5100
app.listen(PORT, ()=>{
    console.log(`Server is running on ${PORT} Port`);
});