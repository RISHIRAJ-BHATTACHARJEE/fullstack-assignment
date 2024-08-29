import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cardsRouter from "./routes/cardRoutes.js";

dotenv.config();

const app = express();
app.use(express.json());
app.use(cors());

const port = process.env.PORT || 5000;
const dbUrl = process.env.MONGO_URI;

app.use("/api/v1/cards", cardsRouter);

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});

mongoose.connect(dbUrl).then(() => {
    console.log("Connected to MongoDB");
}).catch((err) => {
    console.log(err)
});
