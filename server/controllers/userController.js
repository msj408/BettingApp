import asyncHandler from "../middlewares/asyncHandler.js";
import User from "../models/userModel.js";

const loginUser = asyncHandler(async (req, res) => {
  console.log(req.body);
  res.send("login user controller");
});
const registerUser = asyncHandler(async (req, res) => {
  const { name, email, password } = req.body;
  const userExists = await User.findOne({ email });
  if (userExists) {
    res.status(400);
    throw new Error("user already exists");
  }
  const user = await User.create({ name, email, password });
  if (user) {
    res.status(201).json(user);
  } else {
    res.status(400);
    throw new Error("invalid user data");
  }
});

export { loginUser, registerUser };
