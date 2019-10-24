const config = require("config");
const jwt = require("jsonwebtoken");

exports.auth = (req, res, next) => {
  const token = req.header("x-auth-token");

  if (!token)
    return res.status(401).json({
      message: "Unauthorized!"
    });

  try {
    // verify token
    const decoded = jwt.verify(token, config.get("jwtSecrete"));

    req.user = decoded;

    next();
  } catch (err) {
    res.status(400).json({ message: 'Token is not valid' });
  }
};
