const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const morgan = require("morgan");
const cors = require("cors");

const app = express();

mongoose.connect("mongodb+srv://root:root@cluster0.fuxvk.mongodb.net/?retryWrites=true&w=majority", (err) => {
  if (err) {
      console.log(err);
  } else {
      console.log("Connected to the database");
  }
});

//Middlewares
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(morgan('dev'));
app.use(cors());

const userRoutes = require('./routes/user');
app.use('/api', userRoutes);

app.listen(3000, (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log("is listening");
  }
});
