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
        initial: 1800,
        isRunning: false,
      },
    ]);
  };

  const deleteTimer = (id) => {
    setData(
      data.filter((item) => item.id !== id));
  };

  const toggleRunningTimer = (id) => {
    setData(
      data.map((item) => {
        return item.id === id
          ? Object.assign(item, { isRunning: !item.isRunning })
          : item;
      })
    );
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
                <Timer
                  key={el.id}
                  timerData={el}
                  onDeleteTimer={deleteTimer}
                  onToggleRun={toggleRunningTimer}
                />
              ))
            : "No timers"}
        </div>
      </main>
    </div>
  );
}

export default App;
