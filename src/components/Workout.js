import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import logo from '../images/logo.svg';
import workoutData from "../json/workouts.json";

const Workout = () => {
	const { id } = useParams();
	const [workout, setWorkout] = useState({});
	let navigate = useNavigate();

	useEffect(() => {
		for (var i = 0; i <= workoutData.length; i++) {
			if (workoutData[i].id === id) {
				setWorkout(workoutData[i]);
				break;
			}
		}
	}, []);
	return (
		
		<div className="Workout">
			<header className="App-header">
				<img src={logo} className="App-logo" alt="logo" />
				<h1>CG Mars Workout: <span>Camp Gladiator</span></h1>
			</header>
			<section>
				<h2>{workout.title}</h2>
				<div className="w-info">
					<div className="w-content">
						<div className="w-img">
							<img src={workout.thumbnail} alt={workout.title} title={workout.title}/>
						</div>
						<div className="w-item">
							<h3>Level: <b>{workout.levelTag}</b></h3>
							<h3>Impact: <b>{workout.impactTag}</b></h3>
							<h4>Duration: {workout.duration}</h4>
						</div>
						<p>{workout.description}</p>
					</div>
					<div className="w-video">
						<video controls>
							<source src={workout.media} type="video/mp4"/>
							Your browser does not support the video tag.
						</video>
					</div>
				</div>
				
				<button onClick={() => navigate(-1)}>Go back</button>
			</section>
		</div>
	);
};

export default Workout;