const express = require("express");
const mongoose = require("mongoose");
const app = express();

app.use(express.json());

// Routes
const wildersRoutes = require("./routes/wildersRoutes");

app.use("/api/wilders", wildersRoutes);
// ------

mongoose
  .connect("mongodb://127.0.0.1:27017/wilderdb", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    autoIndex: true,
  })
  .then(() => console.log("Connected to database"))
  .catch((err) => console.log(err));

mongoose.set("useFindAndModify", false);

app.listen(5000, () => console.log("Server started on 5000"));
