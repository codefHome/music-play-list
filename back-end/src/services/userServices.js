const User = require("../models/UserModel");
const bcrypt = require("bcrypt");

exports.registerUserService = async (data) => {
  try {
    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(data.password, salt);
    const payload={...data,password:hash}
    const result = await User.insertMany({ ...payload });
    console.log(hash)
    return result;
  } catch (err) {
    return {
      success: false,
      msg: err.code === 11000 ? "Email duplicated" : err,
    };
  }
};

exports.signInService = async (email, password) => {
  try {
    const user = await User.findOne({ email });
    const isPasswordMatch = await bcrypt.compare(password, user.password);

    if (!isPasswordMatch) {
      return "Invalid credentials";
    }
    return user;
  } catch (err) {
    return err;
  }
};
