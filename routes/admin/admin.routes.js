import express from "express";
const adminRouter = express.Router();
import { articleDeleteBackOffice, newArticle} from "../../controllers/backOffice.controller.js";
import { createCategories, deleteCategories, modifyCategories } from "../../controllers/categories.controller.js";
import { createQuizzes, deleteQuizz, modifyQuizzes } from "../../controllers/quizzes.controller.js";
import {homepageBackOffice, articleBackOffice, categoriesBackOffice, quizzesBackOffice} from "../../controllers/backOffice.controller.js"


//GET
adminRouter.get("/homepage", homepageBackOffice)
adminRouter.get("/articles", articleBackOffice)
adminRouter.get("/categories", categoriesBackOffice)
adminRouter.get("/quizzes", quizzesBackOffice)

//POST
adminRouter.all("/article/new", newArticle);
adminRouter.post("/categories/new", createCategories);
adminRouter.post("/categories/delete/:id", deleteCategories);
adminRouter.post("/categories/update/:id", modifyCategories);
adminRouter.post("/quizz/new", createQuizzes);
adminRouter.post("/quizz/delete/:id", deleteQuizz);
adminRouter.post("/quizz/update/:id", modifyQuizzes);

//DELETE
adminRouter.post("/article/delete/:id", articleDeleteBackOffice)



export default adminRouter
