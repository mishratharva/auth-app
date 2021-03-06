const jwt = require("jsonwebtoken");

function auth (req, res, next) {
  const token = req.header("auth-token");
  if (!token) return res.status(401).send("Acess Denied");

  try {
    const verified = jwt.verify(token, process.env.TOKEN_SECRET);
    req.user = verified;
    next();
  } catch (err) {
    res.status(401).send("Invalid Token");
  }
};

module.exports = auth;