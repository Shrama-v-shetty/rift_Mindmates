const express = require("express");
const cors = require("cors");
const { connectDB } = require("./config/db");
const uploadRoute = require("./routes/uploadRoute");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api", uploadRoute);

connectDB().then(() => {
  app.listen(5000, () => {
    console.log("Server running on port 5000");
  });
});
