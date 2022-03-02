import express from "express";
import { getProfil } from "../controllers/user.controller.js";
import { getAllCategories, getCategories } from "../controllers/categories.controller.js";
import adminRouter from "./admin/admin.routes.js"
const userRouter = express.Router();


userRouter.get("/profil", getProfil)
userRouter.get("/categories", getAllCategories );
userRouter.get("/category/:id", getCategories);
userRouter.get("/article/:id");
userRouter.get("/quizz/:id");
userRouter.use("/admin", adminRouter)



export default userRouter;
