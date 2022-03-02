import express from "express";
const appRouter = express.Router();
import { lastArticles, allArticles } from "../controllers/article.controller.js";


// appRouter.get("/", (req, res, next) => {
//   res.render("main/layout", { template: "homepage" });
//   return;
// });
appRouter.get("/home", lastArticles)
appRouter.get("/articles", allArticles)


export default appRouter;
