const express = require("express");

const router = express.Router();

//@route POST api/users
//@desc  Register user
//@access Public
router.post("/", (req, res) => {
  res.send("Register User");
});

module.exports = router;
