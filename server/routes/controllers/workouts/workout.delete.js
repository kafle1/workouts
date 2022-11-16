const Workout = require("../../../models/workoutModel");
const mongoose = require("mongoose")
const deleteWorkout = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({error: "Invalid id"})
  }
  try {
    const workout = await Workout.findOneAndDelete({_id: id});

    if (!workout) {
      res.status(404).json({ error: "No workout found" });
    }

    res.status(200).json(workout);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};


module.exports = deleteWorkout;