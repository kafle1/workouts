const express = require("express");

const getWorkouts = require("./controllers/workouts/workouts.get");
const getWorkout = require("./controllers/workouts/workout.get");
const createWorkout = require("./controllers/workouts/workout.post");
const updateWorkout = require("./controllers/workouts/workout.patch");
const deleteWorkout = require("./controllers/workouts/workout.delete");

const router = express.Router();

// GET  all workouts
router.get("/", getWorkouts);

//GET single workout
router.get("/:id", getWorkout);

//POST new workouts
router.post("/", createWorkout);

//DELETE  workout
router.delete("/:id", deleteWorkout);

//PATCH workout
router.patch("/:id", updateWorkout);

module.exports = router;
