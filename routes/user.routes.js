import express from "express";
import { getAllCategories, getCategories } from "../controllers/categories.controller.js";
import { articleDetail } from "../controllers/article.controller.js"
import adminRouter from "./admin/admin.routes.js"
import { getQuizz } from "../controllers/quizzes.controller.js";
const userRouter = express.Router();


// userRouter.get("/profil", getProfil)
userRouter.get("/categories", getAllCategories);
userRouter.get("/category/:id", getCategories);
userRouter.get("/article/:id", articleDetail);
userRouter.get("/quizz/:id", getQuizz);
userRouter.use("/admin", adminRouter)



export default userRouter;
