require("dotenv").config();
const express = require("express");
const helmet = require("helmet");
const morgan = require("morgan");
const mongoose = require("mongoose");
const cors = require("cors");
const rateLimit = require("express-rate-limit");

const workoutRoutes = require("./routes/workouts.route");

const app = express();

//Rate limit the api calls
const limiter = rateLimit({
  windowMs: 1 * 60 * 1000,
  max: 30, // Limit each IP to 100 requests per `window` (here, per 15 minutes)
  standardHeaders: true, // Return rate limit info in the `RateLimit-*` headers
  legacyHeaders: false, // Disable the `X-RateLimit-*` headers
});

app.use(cors());

app.use(helmet());

app.use(express.json());

//logger
app.use(morgan("short"));

//routes
app.use("/api/workouts", limiter, workoutRoutes);

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
