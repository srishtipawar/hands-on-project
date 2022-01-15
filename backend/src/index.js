//creating express server
const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config(); //loads all var of env file
const app = express();

app.get("/hello-world", (req, res) => {
  console.log(res.send("Helllo World"));
});

mongoose
  .connect(process.env.MONGODB_URL)
  .then(() => {
    console.log("MongoDB db has started");
  })
  .catch((err) => {
    console.log("Error while connecting to db " + err);
  });
//to tell the port no. to run
app.listen(process.env.PORT, () => {
  console.log("Backend server started at" + process.env.PORT);
});
