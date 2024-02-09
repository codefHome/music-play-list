const {
  registerUserService,
  signInService,
} = require("../services/userServices");

exports.registerUser = async (req, res) => {
  try {
    const result = await registerUserService({ ...req.body });
    res.status(201).json(result);
  } catch (err) {
    res.status(500).jso(err);
  }
};

exports.signInController = async (req, res) => {
  try {
    const { email, password } = req.body;
    const result = await signInService(email, password);
    res.status(200).json(result);
  } catch (err) {
    res.status(500).json(err);
  }
};
