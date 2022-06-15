// importing dependencies and functions
const cors = require("cors");
const express = require("express");
const app = express();
const connectDB = require("./config/connectDB");
require("dotenv").config();

const formData = require("express-form-data");
const os = require("os");

const options = {
  uploadDir: os.tmpdir(),
  autoClean: true,
};

app.use(formData.parse(options));

app.use(express.json());
// 1- Creating the server

const PORT = process.env.PORT || 5000;

app.listen(PORT, (err) => {
  if (err) throw err;
  console.log(`SERVER IS RUNNING ON PORT: ${PORT}`);
});

// 2- Connecting to database
connectDB();

// 3-connecting the routes
app.use(cors({ origin: "http://localhost:3000" }));

app.use("/api/users", require("./routes/user"));
app.use("/api/musees", require("./routes/museeRoute"));
