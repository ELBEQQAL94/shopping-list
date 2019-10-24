const User = require("../models/User");
const validatorSignIn = require("../validator/validatorSignIn");
const _ = require("lodash");
const bycrypt = require("bcryptjs");
const config = require("config");
const secret = config.get("jwtSecrete");
const jwt = require("jsonwebtoken");

// AUTH USER

// SIGN IN USER
exports.signIn = (req, res) => {
  const { email, password } = req.body;

  if (validatorSignIn(req.body).error) {
    res.status(400).json({
      message: validatorSignIn(req.body).error.details[0].message
    });
  }

  // check for exist user
  User.findOne({ email })
    .then(user => {
      if (!user)
        return res.status(400).json({
          message: "User Does not exists"
        });

      // validate password
      bycrypt.compare(password, user.password).then(isMatch => {
        if (!isMatch)
          return res.status(400).json({
            message: "Password is incorrect, please check your password!"
          });

        jwt.sign({ id: user.id }, secret, { expiresIn: 3600 }, (err, token) => {
          if (err) throw err;
          res.status(200).json({
            token,
            user: {
              id: user._id,
              username: user.username,
              email: user.email
            }
          });
        });
      });
    })
    .catch(err => console.log(err));
};
