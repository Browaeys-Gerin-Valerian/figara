import "dotenv/config.js";
import "./config/db.config.js";
import express from "express";
const app = express();
import { default as cookieParser } from "cookie-parser";
import { CONFIG } from "./config/config.js";
const { HOST, PORT } = CONFIG;
import {
  extractUserFromToken,
  jwtHelpers,
} from "./middlewares/jwtCheck.middleware.js";
import router from "./routes/index.js";

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(express.static("public"));
app.use(extractUserFromToken);
app.use(jwtHelpers);



app.set("views", "./views");
app.set("view engine", "ejs");

app.use(router);

app.listen(PORT, () => {
  console.log(`APP RUNNING ON http://${HOST}:${PORT}`);
});
