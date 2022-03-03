import express from "express";
const adminRouter = express.Router();
import { newArticle } from "../../controllers/article.controller.js";
import { createCategories, deleteCategories, modifyCategories } from "../../controllers/categories.controller.js";
import { createQuizzes, deleteQuizz, modifyQuizzes } from "../../controllers/quizzes.controller.js";

adminRouter.post("/article/new", newArticle);
adminRouter.post("/categories/new", createCategories);
adminRouter.post("/categories/delete/:id", deleteCategories);
adminRouter.post("/categories/update/:id", modifyCategories);
adminRouter.post("/quizz/new", createQuizzes);
adminRouter.post("/quizz/delete/:id", deleteQuizz);
adminRouter.post("/quizz/update/:id", modifyQuizzes);


export default adminRouter
