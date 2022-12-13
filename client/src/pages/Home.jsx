import { useEffect } from "react";
import axios from "axios";

// components
import WorkoutDetails from "../components/WorkoutDetails";
import WorkoutForm from "../components/WorkoutForm";
import { useWorkoutsContext } from "../hooks/useWorkoutsContext";

const Home = () => {
  const { workouts, dispatch } = useWorkoutsContext();

  useEffect(() => {
    const fetchWorkouts = async () => {
      const response = await axios.get("http://localhost:4000/api/workouts");

      dispatch({ type: "SET_WORKOUTS", payload: response.data });
    };

    fetchWorkouts();
  }, [dispatch]);

  return (
    <div className="home">
      <div className="workouts">
        {workouts &&
          workouts.map((workout) => (
            <WorkoutDetails workout={workout} key={workout._id} />
          ))}
      </div>
      <WorkoutForm />
    </div>
  );
};

export default Home;
