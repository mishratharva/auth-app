const verify = require("./verifyToken");

const router = require("express").Router();

router.get("/", (req, res) => {
  res.send("hello world!");
  res.json({
    user: req.user,
    posts: { title: "my first post", description: "no login no access" },
  });
});

module.exports = router;
