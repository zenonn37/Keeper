const express = require("express");

const router = express.Router();

//@route POST api/contacts
//@desc  Register user
//@access Private
router.get("/", (req, res) => {
  res.send("Get all contacts");
});

//@route POST api/contacts
//@desc  Register user
//@access Private
router.post("/", (req, res) => {
  res.send("new contact");
});

router.put("/:id", (req, res) => {
  res.send("Update contact");
});

router.delete("/:id", (req, res) => {
  res.send("delete contact");
});

module.exports = router;
