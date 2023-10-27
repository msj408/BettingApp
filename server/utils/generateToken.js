import jwt from "jsonwebtoken";

const generateToken = (res, userId) => {
  const token = jwt.sign({ userId }, process.env.JWT_SECRET, {
    expiresIn: "30d",
  });
  console.log(token);
  // set jwt as http only cookie
  res.cookie("jwt", token, {
    httpOnly: true,
    // which domains can access API. Prevents from CSRF attacks
    sameSite: "strict",
    maxAge: 30 * 24 * 60 * 60 * 1000,
  });
};

export default generateToken;
