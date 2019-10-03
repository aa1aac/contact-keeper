const express = require("express");
const { check, validationResult } = require("express-validator");

const Contact = require("../models/Contact");
const User = require("../models/User");
const auth = require("../middleware/auth");

const router = express.Router();

router.get("/", auth, async (req, res) => {
  try {
    const contacts = await Contact.find({ user: req.user.id }).sort({
      date: -1
    });
    res.json(contacts);
  } catch (err) {
    console.log(err);
    res.status(500).send("server error");
  }
});

router.post(
  "/",
  [
    auth,
    [
      check("name", "Name is required")
        .not()
        .isEmpty()
    ]
  ],
  async (req, res) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { name, email, phone, type } = req.body;

    try {
      const newContact = new Contact({
        name,
        email,
        phone,
        type,
        user: req.user.id
      });

      const contact = await newContact.save();

      res.json(contact);
    } catch (err) {
      console.log(error);
      res.status(500).send("Server error");
    }
  }
);

router.put("/:id", (req, res) => {
  res.send("update contact");
});

router.delete("/:delete", (req, res) => {
  res.send("delete contact");
});

module.exports = router;
