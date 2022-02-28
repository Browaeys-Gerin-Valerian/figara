import express from "express";
const authRouter = express.Router();
import { createUser } from "../controllers/user.controller.js";

authRouter.post("/register", createUser);
// authRouter.get("/login")

export default authRouter;
