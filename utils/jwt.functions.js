import jwt from "jsonwebtoken";
import { CONFIG } from "../config/config.js";
const { SECRET_KEY } = CONFIG;

export const createJwt = (user, isAdmin) => {
  return jwt.sign({ user, isAdmin }, SECRET_KEY);
};
