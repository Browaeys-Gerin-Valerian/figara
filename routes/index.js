import express from "express";
const router = express.Router();
import { isAuthenticated } from "../middlewares/jwtCheck.middleware.js"
import  authRouter  from "./auth.routes.js"
import userRouter from "./user.routes.js"

// router.use("/")
router.use((req, res, next) => {
    next();
});
router.use("/auth", authRouter);
router.use("/user", isAuthenticated, userRouter);

router.get("/", (req, res, next) => {
    res.render("main/layout", { template: "homepage"});
    return;
});

router.get("/articles", (req, res, next) => {
    res.render("main/layout", { template: "articles" });
    return;
});

router.get("*", (req, res, next) => {
  res.render("main/layout", {
    template: "error",
    error: "404 — La page que vous avez demandé n'existe pas",
  });
  return;
});

export default router;
