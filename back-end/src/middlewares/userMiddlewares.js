const User = require("../models/UserModel");


exports.signInMiddleware = async(req, res, next) => {
  try {
    const { email } = req.body;
    const user = await User.findOne({ email });

    if (!user) {
      req.userNotFound = true;
    }
    next();
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
}

