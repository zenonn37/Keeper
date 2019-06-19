const express = require("express");

const router = express.Router();

//@route GET api/auth
//@desc  Get Logged in user
//@access Private
router.get("/", (req, res) => {
  res.send("Get User");
});

//@route Post api/auth
//@desc

router.post("/", (req, res) => {
  res.send("Get Access token");
});

module.exports = router;
