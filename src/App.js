import React from "react";
import './App.css';
import Review from "./components/Review";
import Timer from "./components/Timer";

const data = [
  {
    id: 1,
    title: "First Timer",
    initial: 3789,
    isRunning: "false",
  },
  {
    id: 2,
    title: "Second Timer",
    initial: 128,
    isRunning: "false",
  },
];

function App() {
  return (
    <div className="App">
      <header className="App-header">
          <div className="container">
            <h1>MyTimers</h1>
            <Review />
        </div>
      </header>
      <main>
        <div className="container">
          {data.map((el) => <Timer key={el.id} timerData={el}/>)}
        </div>
      </main>
    </div>
  );
}

export default App;
