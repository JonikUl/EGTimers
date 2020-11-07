import React, { useState } from "react";
import './App.css';
import Panel from "./components/Panel";
import Timer from "./components/Timer";

function App() {
  const [data, setData] = useState([]);

  const addTimer = () => {
    setData([
      ...data,
      {
        id: Date.now(),
        title: "Unnamed " + data.length,
        initial: 0,
        isRunning: false,
      },
    ]);
  };

  const deleteTimer = (id) => {
    setData(
      data.filter((item) => item.id !== id));
  };

  return (
    <div className="App">
      <header className="App-header">
        <div className="container">
          <h1>MyTimers</h1>
          <Panel data={data} onAddTimer={addTimer} />
        </div>
      </header>
      <main>
        <div className="container">
          {data.length
            ? data.map((el) => (
                <Timer key={el.id} timerData={el} onDeleteTimer={deleteTimer} />
              ))
            : "No timers"}
        </div>
      </main>
    </div>
  );
}

export default App;
