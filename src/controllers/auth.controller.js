const User = require("../models/User.js");
const Role = require("../models/Role.js");
const jwt = require("jsonwebtoken");
const config = require("../config.js");

const signup = async (req, res) => {
  const { username, email, password, roles } = req.body;

  try {
    const encryptedPassword = await User.encryptPassword(password); // Wait for encryption
    const newUser = new User({
      username,
      email,
      password: encryptedPassword, // Use the encrypted password
    });

    if (roles) {
      const foundRoles = await Role.find({ name: { $in: roles } });
      newUser.roles = foundRoles.map((role) => role._id);
    } else {
      const role = await Role.findOne({ name: "user" });
      newUser.roles = [role._id];
    }

    const savedUser = await newUser.save();
    console.log(savedUser);

    const token = jwt.sign({ id: savedUser._id }, config.SECRET, {
      expiresIn: 86400, // 24 hours
    });
    res.status(200).json({ token });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const signin = async (req, res) => {
  const userFound = await User.findOne({ email: req.body.email }).populate(
    "roles"
  );
  if (!userFound) return res.status(400).json({ message: "User Not Found" });

  const matchPassword = await User.comparePassword(
    req.body.password,
    userFound.password
  );

  if (!matchPassword)
    return res.status(401).json({
      token: null,
      message: "Invalid Password",
    });

  const token = jwt.sign({ id: userFound._id }, config.SECRET, {
    expiresIn: 86400, // 24 hours
  });

  // console.log(userFound);
  res.json({ token });
};
module.exports = {
  signup,
  signin,
};
