import mongoose from "mongoose";

export interface IFile extends mongoose.Document {
    filename: string;
    createdAt: Date;
}

const fileSchema = new mongoose.Schema({
  filename: String,
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const FileModel = mongoose.model("File", fileSchema);

export default FileModel;
