require("dotenv").config();
require("./config/db.config");
const express = require("express");
const app = express();
const { PORT, HOST } = require("./config/config");
const rootRouter = require("./routes");
exports.app = app;

require("./middlewares/core.middleware");

app.use(express.static("public"));



app.set("views", "./views");
app.set("view engine", "ejs");

app.use(rootRouter);

app.listen(PORT, () => {
  console.log(`APP RUNNING ON http://${HOST}:${PORT}`);
});
