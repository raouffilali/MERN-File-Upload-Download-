// backend/src/index.ts

import express from "express";
import cors from "cors";
import uploadRoutes from "./upload";

const app = express();
const PORT = process.env.PORT || 5000;

// Enable CORS
app.use(cors());

app.use("/api", uploadRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
