//  route api/users

const express = require("express");
const router = express.Router();

// route post api/users

// route register a user

// route access Public
router.post("/", (req, res) => {
  res.send("Register a user");
});

module.exports = router;
