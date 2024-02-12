const User = require("../models/UserModel");
const bcrypt = require("bcrypt");
const jwt =require('jsonwebtoken')
exports.registerUserService = async (data) => {
  try {
    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(data.password, salt);
    const payload={...data,password:hash}
   await User.insertMany({ ...payload });
    return {msg:'Registered Successfully',success:true}
  
    
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
      return {success:{msg:'Invalid credentials',success:false} }
    }
    const tokenPayload = {
      userId: user.userId,
      email: user.email,
      fullName: user.fullName,
    };

    const token = jwt.sign(tokenPayload, process.env.JWT_SECRET, {
      expiresIn: '5000h', 
    });
    return {data:{
      userName:user.fullName,
      email:user.email,
      userId:user.userId,
      _id:user._id,
      token:token
    },
    success:{msg:'SignIn Successfully',success:true}
 };
  } catch (err) {
    return err;
  }
};

