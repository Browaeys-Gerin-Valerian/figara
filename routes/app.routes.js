import express from "express";
const appRouter = express.Router();
import { lastArticles, allArticles } from "../controllers/article.controller.js";



appRouter.get("/home", lastArticles)
appRouter.get("/articles", allArticles)
appRouter.get("/contact")


export default appRouter;
