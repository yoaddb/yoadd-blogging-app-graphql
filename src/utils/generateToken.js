import jwt from "jsonwebtoken";

const generateToken = userId => {
  return jwt.sign({ userId }, process.env.PRISMA_JWT, { expiresIn: "1h" });
};

export default generateToken;
