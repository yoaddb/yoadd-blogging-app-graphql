import jwt from "jsonwebtoken";

const generateToken = userId => {
  return jwt.sign({ userId }, "secret", { expiresIn: "1h" });
};

export default generateToken;
