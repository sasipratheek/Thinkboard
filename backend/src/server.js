import express from "express";
import notesRoutes from "./routes/notesRoutes.js";
import { connectDB } from "./config/db.js";
import dotenv from "dotenv";
dotenv.config();

const app = express();
const PORT = process.env.PORT || 5001;

app.use(express.json());

app.use((req, res, next) => {
  console.log(`Req method is ${req.method} & Req URL is ${req.url}`);
  next();
});

app.use("/api/notes", notesRoutes);

app.get("/", (req, res) => {
  res.send("✅ Backend is working!");
});

app.use((req, res) => {
  res.status(404).json({ message: "Route Not Found" });
});

// ✅ Only call `listen` after DB connection
const startServer = async () => {
  await connectDB();
  app.listen(PORT, () => {
    console.log(`🚀 Server running on port ${PORT}`);
  });
};

startServer();
