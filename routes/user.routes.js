import express from "express";
import { getAllCategories, getCategory } from "../controllers/categories.controller.js";
import { articleDetail } from "../controllers/article.controller.js";
import { getQuizz } from "../controllers/quizzes.controller.js";
const userRouter = express.Router();



userRouter.get("/categories", getAllCategories);
userRouter.get("/category/:id", getCategory);
userRouter.get("/article/:id", articleDetail);
userRouter.get("/article/:articleid/quizz/:quizzid", getQuizz);



export default userRouter;
