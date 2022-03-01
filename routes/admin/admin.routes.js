import express from "express";
const adminRouter = express.Router();
import { newArticle } from "../../controllers/article.controller.js";

adminRouter.post("/article/new", newArticle);

export default adminRouter;
