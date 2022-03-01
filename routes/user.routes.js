import express from "express";
import { getProfil } from "../controllers/user.controller.js";
const userRouter = express.Router();


userRouter.get("/profil", getProfil)
userRouter.get("/categories");
userRouter.get("/category/:id");
userRouter.get("/article/:id");
userRouter.get("/quizz/:id");

export default userRouter;
