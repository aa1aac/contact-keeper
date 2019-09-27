const express = require("express");

const app = express();

const PORT = process.env.PORT || 5000;

// 6.4

app.get("/", (req, res) => {
  res.json("hello world");
});

app.listen(PORT, () => {
  console.log(`backend server running on port ${PORT}`);
});
