const router = require("express").Router();
const User = require("../models/user");

router.post("/user", async (req, res) => {
  try {
    let user = new User();
    user.email = req.body.email;
    user.firstName = req.body.firstName;
    user.lastName = req.body.lastName;
    user.gender = req.body.gender;

    await user.save();

    res.json({
      success: true,
      message: "User register",
    });
  } catch (err) {
    res.json({
      success: false,
      message: err.message,
    });
  }
});

router.get("/user", async (req, res) => {
  try {
    const page = req.query.page;
    const limit = req.query.limit;

    const firstIndex = (page - 1) * limit;

    let users = await User.find().limit(limit).skip(firstIndex);

    res.json({
      users: users,
    });
  } catch (err) {
    res.json({
      succes: false,
      message: err.message,
    });
  }
});

module.exports = router;
