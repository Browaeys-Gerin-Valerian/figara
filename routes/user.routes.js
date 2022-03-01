import express from "express";
const userRouter = express.Router();


userRouter.get("/profil");
userRouter.get("/categories");
userRouter.get("/category/:id");
userRouter.get("/article/:id");
userRouter.get("/quizz/:id");

export default userRouter;
