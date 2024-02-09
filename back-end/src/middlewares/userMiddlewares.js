const User = require("../models/UserModel");


exports.signInMiddleware = async(req, res, next) => {
  try {
    const { email } = req.body;
    const user = await User.findOne({ email });

    if (!user) {
      throw new Error('User does not exist');
    }
    next();
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
}

