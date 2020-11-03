const express = require("express");
const mongoose = require("mongoose");
const app = express();
const wilderControllers = require("./controllers/wilders");

mongoose
  .connect("mongodb://127.0.0.1:27017/wilderdb", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    autoIndex: true,
  })
  .then(() => console.log("Connected to database"))
  .catch((err) => console.log(err));

app.post("/", wilderControllers.create);

app.listen(3000, () => console.log("Server started on 3000"));
