import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import templeRoutes from "./routes/templeRoutes.js";
import connectDB from "./config/db.js";


dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Pilgrim Guide API Running");
});

app.use("/api/temples", templeRoutes);

const PORT = 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});


connectDB()