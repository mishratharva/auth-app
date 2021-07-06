const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const authRoute = require("./routes/auth");
const postRoute = require("./routes/posts");
const bodyParser = require("body-parser");

dotenv.config();

mongoose
  .connect(process.env.DB_CONNECT, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Connected to mongoDB"))
  .catch((err) => {
    console.log("Error: " + err);
  });
const cors = require("cors");

app.use(cors());
app.use(bodyParser.json());
app.use("/api/user", authRoute);
app.use("/api/posts", postRoute);

app.listen(5000, () => {
  console.log("Server started at 5000");
});
