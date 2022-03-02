import express from "express";
const authRouter = express.Router();
import { createUser } from "../controllers/user.controller.js";
import { login, logout } from "../controllers/auth.controller.js";
import { getAllCategories } from "../controllers/categories.controller.js";

authRouter.all("/register", createUser);
authRouter.all("/login", login);
authRouter.all("/logout", logout);
authRouter.get("/categories", getAllCategories);

export default authRouter;
