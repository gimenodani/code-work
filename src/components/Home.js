import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import logo from '../images/logo.svg';
import '../App.scss';

const Home = () => {
  const [workouts, setPosts] = useState([]);
  useEffect(() => {
    const fetch = async () => {
      try {
        const { data } = await axios.get("../json/workouts.json");
        setPosts(data);
      } catch (err) {
        console.error(err);
      }
    };
    fetch();
  }, []);
  return (
    <div className="App">
       <header className="App-header">
         <img src={logo} className="App-logo" alt="logo" />
         <h1>CG Mars Workout: <span>Camp Gladiator</span></h1>
       </header>
       <main className="workout-list">
         <h2>Let's check available workouts!</h2>
         <ol>
         {workouts.map(item => (
            
            <li key={item.id}>
              <Link to={`/workout/${item.id}`}>
                <h3>{item.title}</h3>
                <p>Level: <i>{item.levelTag}</i></p>
              </Link>
            </li>
  
            ))}
  
          </ol>
        </main>
      </div>
  );
};

export default Home;