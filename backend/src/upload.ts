import express from "express";
import multer from "multer";
import fs from "fs";
import path from "path";
import mongoose from "mongoose";
import FileModel from "../models/File"; // Create a model for the File entity

const router = express.Router();
mongoose.connect("mongodb://localhost:27017/file_upload", {}).then(() => {
  console.log("Connected to MongoDB");
});

// Configure multer storage
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "./uploads");
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  },
});

const upload = multer({ storage });

router.post("/upload", upload.single("file"), async (req, res) => {
  const { filename } = req.file as Express.Multer.File; // Type assertion;

  // Save file information to the database
  const file = new FileModel({
    filename,
  });

  try {
    await file.save();
    res.json({ message: "File uploaded successfully" });
  } catch (error) {
    res.status(500).json({ message: "Error uploading file" });
  }
});

// Download file
router.get("/download/:filename", (req, res) => {
  const filePath = path.join(__dirname, "../uploads", req.params.filename);
  const fileStream = fs.createReadStream(filePath);
  fileStream.pipe(res);
});

// Get list of uploaded files
router.get("/files", async (req, res) => {
  try {
    const files = await FileModel.find({}, "filename");
    const filenames = files.map((file) => file.filename);
    res.json(filenames);
  } catch (error) {
    res.status(500).json({ message: "Error fetching file list" });
  }
});

export default router;
