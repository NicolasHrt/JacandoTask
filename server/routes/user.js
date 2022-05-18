const router = require("express").Router();
const user = require("../models/user");
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
    const page = parseInt(req.query.page);
    const limit = parseInt(req.query.limit);

    const firstIndex = (page - 1) * limit;
    const lastIndex = page * limit;

    let users = {};

    if(lastIndex < await User.countDocuments().exec()){
      users.next = {
        page: page + 1,
        limit: limit
      }
    }

    if(firstIndex > 0 ) {
      users.previous = {
        page: page - 1,
        limit: limit
      }
    }
    users.total = await User.countDocuments().exec();
    users.users = await User.find().limit(limit).skip(firstIndex);

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
