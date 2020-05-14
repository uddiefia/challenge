const express = require("express");
const commentRoutes = require("./routes/comments");
const bodyParser = require("body-parser");
const errorController = require("./controllers/error");
const mongoose = require("mongoose");

const port = 3000;
const app = express();

app.use(bodyParser.json());

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE,PATCH");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
  next();
});

app.use("/work-effort", commentRoutes);
app.use(errorController.get404);

mongoose
  .connect(
    "mongodb+srv://udara:01478523@cluster0-jmxgv.mongodb.net/comments?retryWrites=true&w=majority"
  )
  .then((result) => {
    console.log("Connected!");
    app.listen(port, () =>
      console.log(`Example app listening at http://localhost:${port}`)
    );
  })
  .catch((err) => {
    console.log(err);
  });
