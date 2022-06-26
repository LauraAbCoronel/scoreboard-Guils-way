import React, {useState, useEffect, useRef} from "react";

const Stopwatch = () => {
  const [ isRunning, setIsRunning ] = useState(false);
  const [ elapsedTime, setElapsedTime ] = useState(0);
  const previousTime = useRef(0);

  useEffect(() => {
    let interval;
    if (isRunning) {
      interval = setInterval(() => {tick()},100);
    } else if (!isRunning) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  },[isRunning]);

  const tick = () => {
    let now = Date.now();
    setElapsedTime((prevTime) => prevTime + (now - previousTime.current));
    previousTime.current = now;
  }

  const handleStopWatch = () => {
    if (!isRunning) {
      previousTime.current = Date.now();
    }
    setIsRunning(prevRunning => !prevRunning);
  }

  return (
    <div className="stopwatch">
      <h2>Stopwatch</h2>
      <span className="stopwatch-time">{elapsedTime}</span>
      <button onClick={() => handleStopWatch()}>
        { isRunning ? 'Stop' : 'Start' }
      </button> 
      <button>Resume</button>
    </div>
  );
}

export default Stopwatch;