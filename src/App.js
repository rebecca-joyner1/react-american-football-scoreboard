//TODO: STEP 1 - Import the useState hook.
// import React from "react";
import "./App.css";
import BottomRow from "./BottomRow";

import React, { useState } from "react";

function App() {
  //TODO: STEP 2 - Establish your applictaion's state with some useState hooks.  You'll need one for the home score and another for the away score.

  const [LionsScore, setLionsScore] = useState(0);

  const [TigersScore, setTigersScore] = useState(0);


  return (
    <div className="container">
      <section className="scoreboard">
        <div className="topRow">
          <div className="home">
            <h2 className="home__name">Lions</h2>

            {/* TODO STEP 3 - We need to change the hardcoded values in these divs to accept dynamic values from our state. */}

            <div className="home__score"> {LionsScore} </div>
          </div>
          <div className="timer">00:00</div>
          <div className="away">
            <h2 className="away__name">Tigers</h2>
            <div className="away__score">{TigersScore}</div>
          </div>
        </div>
        <BottomRow />
      </section>
      <section className="buttons">
        <div className="homeButtons">
          {/* TODO STEP 4 - Now we need to attach our state setter functions to click listeners. */}

          <button className="homeButtons__touchdown" onClick={() => setLionsScore(LionsScore + 7)} >Home Touchdown</button>

          <button className="homeButtons__fieldGoal" onClick={() => setLionsScore(LionsScore + 3)}  >Home Field Goal</button>

        </div>


        <div className="awayButtons">
          <button className="awayButtons__touchdown" onClick={() => setTigersScore(TigersScore + 7)} >Away Touchdown</button>

          <button className="awayButtons__fieldGoal"onClick={() => setTigersScore(TigersScore + 3)}  >Away Field Goal</button>

        </div>
      </section>
    </div>
  );
}

export default App;
