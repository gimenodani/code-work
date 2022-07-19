import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Home from "./components/Home";
import Workout from "./components/Workout";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home/>} />
        <Route exact path="/workout/:id" element={<Workout/>} />
      </Routes>
    </Router>
  );
};

export default App;