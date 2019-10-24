const User = require("../models/User");
const validator = require("../validator");
const _ = require("lodash");
const bycrypt = require("bcryptjs");
const config = require("config");
const secret = config.get("jwtSecrete");
const jwt = require("jsonwebtoken");

// GET USERS
//exports.getUsers = (req, res) => {};

// GET USER
//exports.getUser = (req, res) => {};

// CREATE USER
exports.createUser = (req, res) => {
  const { username, email, password } = req.body;

  if (validator(req.body).error) {
    res.status(400).json({
      message: validator(req.body).error.details[0].message
    });
  }

  // check for exist user
  User.findOne({ email })
    .then(user => {
      if (user)
        return res.status(400).json({
          message: "Email already existe, please shoose another one"
        });

      // create new user
      const newUser = new User({
        email,
        password,
        username
      });

      // create salt & hash
      bycrypt.genSalt(10, (err, salt) => {
        bycrypt.hash(newUser.password, salt, (err, hash) => {
          if (err) throw err;
          newUser.password = hash;
          newUser
            .save()
            .then(user => {
              jwt.sign(
                { id: user.id },
                secret,
                { expiresIn: 3600 },
                (err, token) => {
                  if (err) throw err;
                  res.status(200).json({
                    token,
                    user: {
                      id: user._id,
                      username: user.username,
                      email: user.email
                    }
                  });
                }
              );
            })
            .catch(err => console.log(err));
        });
      });
    })
    .catch(err => console.log(err));
};

// GET USER
exports.getUser = (req, res) => {
  User.findById({_id: req.params.userId})
      .select('-password')
      .then(user => {
        if(!user) return res.status(400).json({
          message: 'User Deos not exists!'
        });

        res.status(200).json({
          user
        });

      });
};


// UPDATE USER
//exports.updateUser = (req, res) => {};

// DELETE USER
//exports.deleteUser = (req, res) => {};
