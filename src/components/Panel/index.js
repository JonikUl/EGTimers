import React from "react";

function Panel(props) {
  const handleClick = () => props.onAddTimer();
  return (
    <div className="Review">
      <div className="count-running">
        Runnings: &nbsp;
        {props.data.filter((item) => item.isRunning).length || 0}
      </div>
      <div className="count-all">Total: {props.data.length || 0}</div>
      <div className="add">
        <button type="button" onClick={handleClick}>
          Add Timer
        </button>
      </div>
    </div>
  );
}

export default Panel;
