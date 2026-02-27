import express from "express";
const app = express();
import dotenv from "dotenv";
import cors from "cors"
import { connectDB } from "./config/db.js";
import authRoutes from "./routes/authRoutes.js";
import productRoutes from "./routes/productRoutes.js"

dotenv.config();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

connectDB();

app.use("/api/auth", authRoutes);
app.use("/api/product", productRoutes)

app.get("/", (req,res)=>{
    res.send("This is a server")
})

const PORT = process.env.PORT || 5100
app.listen(PORT, ()=>{
    console.log(`Server is running on ${PORT} Port`);
});