import { useState, useRef } from "react";
import styles from "./StopWatch.module.css";

function StopWatch() {
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const intervalRef = useRef<number | undefined>();

  function handleStart() {
    setIsRunning(true);
    intervalRef.current = setInterval(() => {
      setTime((prevTime) => prevTime + 10);
    }, 10);
  }

  function handlePause() {
    clearInterval(intervalRef.current);
    setIsRunning(false);
  }

  function handleReset() {
    clearInterval(intervalRef.current);
    setIsRunning(false);
    setTime(0);
  }

  const milliseconds = `0${(time % 1000) / 10}`.slice(-2);
  const seconds = `0${Math.floor((time / 1000) % 60)}`.slice(-2);
  const minutes = `0${Math.floor((time / 60000) % 60)}`.slice(-2);
  const hours = `0${Math.floor(time / 3600000)}`.slice(-2);

  return (
    <>
      <h1 className={styles.hdg}>StopWatch</h1>

      <div className={styles.timer}>
        {hours}:{minutes}:{seconds}:{milliseconds}
      </div>

      <ul className={styles.btnList}>
        <li className="btnItem">
          {isRunning ? (
            <button type="button" className={styles.btn} onClick={handlePause}>
              Pause
            </button>
          ) : (
            <button type="button" className={styles.btn} onClick={handleStart}>
              Start
            </button>
          )}
        </li>
        <li className="btnItem">
          <button type="button" className={styles.btn} onClick={handleReset}>
            RESET
          </button>
        </li>
      </ul>
    </>
  );
}

export default StopWatch;
