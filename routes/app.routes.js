import express from "express";
const appRouter = express.Router();
import { homepage, allArticles, searchInArticles } from "../controllers/article.controller.js";
import { contact } from "../controllers/other.controller.js";




appRouter.get("/home", homepage)
appRouter.post("/search", searchInArticles)
appRouter.get("/articles", allArticles)
appRouter.get("/contact", contact)


export default appRouter;
