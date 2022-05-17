const router = require("express").Router();
const User = require("../models/user");

router.post("/user", (req, res) => {
  res.json({
    message: "test",
  });
});

router.get("/user", (req, res) => {
  res.json({
    message: "bonjour",
  });
});

module.exports = router;
