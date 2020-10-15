import React from "react";

function Timer(props) {
    const { title, initial, isRunning } = props.timerData;
    const addNull = (str) => {
        return str.length === 1 ? '0' + str : str;
    }

    const runningHandler = (target) => {
        console.log(target);
    }

    const timeView = (sec) => {
        const time = {
            hours: addNull(String(Math.floor(sec / 3600))),
            minutes: addNull(String(Math.floor((sec % 3600) / 60))),
            seconds: addNull(String(sec % 3600 % 60)),
        }
        return `${time.hours} : ${time.minutes} : ${time.seconds}`;
    };


    return (
        <div className="Timer-item">
            <div className="timer-header">{title}</div>
            <div className="timer-body">{timeView(initial)}</div>
            <div className="timer-footer">
                <button className="toggle-run" onClick={e => runningHandler(e)}>{isRunning ? 'Start' : 'Stop'}</button>
                <button className="reset">Reset</button>
                <button className="delete">Delete</button>
            </div>
        </div>
    );
}

export default Timer;
