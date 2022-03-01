import express from "express";
const authRouter = express.Router();
import { createUser } from "../controllers/user.controller.js";
import { login } from "../controllers/auth.controller.js";

authRouter.post("/register", createUser);
authRouter.post("/login", login);

export default authRouter;
