import express from "express";
const authRouter = express.Router();
import { createUser } from "../controllers/user.controller.js";
import { login, logout } from "../controllers/auth.controller.js";

authRouter.all("/register", createUser);
authRouter.all("/login", login);
authRouter.all("/logout", logout);

export default authRouter;
