require("dotenv").config();
const express = require("express");
const helmet = require("helmet");
const morgan = require("morgan");
const mongoose = require("mongoose");

const workoutRoutes = require("./routes/workouts.route");

const app = express();

app.use(helmet());

app.use(express.json());

//logger
app.use(morgan("short"));

//routes
app.use("/api/workouts", workoutRoutes);

//connect to db
mongoose.connect(
  process.env.MONGODB_URI,
  {
    useNewUrlParser: true,
  },
  (err) => {
    if (!err) {
      //listen for request
      app.listen(process.env.PORT, () => {
        console.log(`Listening on port ${process.env.PORT}`);
        console.log("MongoDB Connection Succeeded.");
      });
    } else {
      console.log("Error in DB connection: " + err);
    }
  }
);
