const express = require("express");

const connectDB = require("./config/db.js");

const app = express();

// connect database
connectDB();

app.use(express.json({ extended: false }));
app.use(express.urlencoded({ extended: false }));

const PORT = process.env.PORT || 5000;

// 9.4

app.get("/", (req, res) => {
  res.send(res.body);
});

app.use("/api/users", require("./routes/users"));
app.use("/api/contacts", require("./routes/contacts"));
app.use("/api/auth", require("./routes/auth"));

app.listen(PORT, () => {
  console.log(`backend server running on port ${PORT}`);
});
