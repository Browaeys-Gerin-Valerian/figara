const mongoose = require("mongoose");
const { DB_HOST, DB_PASSWORD, DB_NAME } = require("./config");

mongoose
  .connect(`mongodb+srv://${DB_HOST}:${DB_PASSWORD}@cluster0.fufuc.mongodb.net/${DB_NAME}?retryWrites=true&w=majority`, {
    // avoid deprecation warning
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then((res) => {
    console.log(
      `Connected to ${res.connection.name} database on http://${res.connection.host}:${res.connection.port}`
    );
  })
  .catch((err) => {
    console.log("ERROR", err);
  });
