const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");
const routes = require("./routes/book-routes");

const app = express();
dotenv.config();
app.use(cors());
app.use(express.json());

mongoose
  .connect(`${process.env.url}`)
  .then(() => {
    app.listen(process.env.PORT || 8000, () => {
      console.log(`Server Started And Db Conneted at ${process.env.PORT}`);
    });
  })
  .catch((error) => {
    console.log(error);
  });

app.use("/books", routes);
