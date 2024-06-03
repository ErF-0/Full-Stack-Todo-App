import { hash, compare } from "bcryptjs";
import { getToken } from "next-auth/jwt";

const hashPassword = async (password) => {
  const hashedPassword = await hash(password, 12);
  return hashedPassword;
};
const verifyPassword = async (password, hashedPassword) => {
  const isValid = await compare(password, hashedPassword);
  return isValid;
};
const validToken = async (req, res) => {
  const session = await getToken({ req });

  if (!session) {
    return res
      .status(422)
      .json({ status: "failed", message: "You are unauthorized" });
  }
  const userEmail = session.email;
  return userEmail;
};
export { hashPassword, verifyPassword, validToken };
