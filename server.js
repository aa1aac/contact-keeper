const express = require("express");

const connectDB = require("./config/db.js");

const app = express();

// connect database
connectDB();

const PORT = process.env.PORT || 5000;

// 6.5

app.get("/", (req, res) => {
  res.json("hello world");
});

app.use("/api/users", require("./routes/users"));
app.use("/api/contacts", require("./routes/contacts"));
app.use("/api/auth", require("./routes/auth"));

app.listen(PORT, () => {
  console.log(`backend server running on port ${PORT}`);
});
