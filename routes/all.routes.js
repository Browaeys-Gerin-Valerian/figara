import express from "express";
const allRouter = express.Router();
import { lastArticles } from "../controllers/article.controller.js";

allRouter.get("/", (req, res, next) => {
  res.render("main/layout", { template: "homepage" });
  return;
});

// allRouter.get("/articles", (req, res, next) => {
//     res.render("main/layout", { template: "articles" });
//     return;
// });

allRouter.get("/articles", lastArticles);

export default allRouter;
