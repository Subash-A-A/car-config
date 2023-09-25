const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");
const routeUrls = require("./routes/router");

dotenv.config();

async function connectToDatabase() {
  try {
    await mongoose.connect(process.env.DATABASE_ACCESS, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("MongoDB connected");
  } catch (error) {
    console.error("MongoDB connection error:", error);
    process.exit(1);
  }
}
connectToDatabase();

app.use(express.json());
app.use(cors());

app.use("/app", routeUrls);

app.listen(4000, () => {
  console.log("Server is running on port 4000");
});
