import { useState, useEffect } from "react";

type StopwatchProps = {
  running: boolean;
  setTotalTime: (arg0: string) => void;
};

export const Stopwatch = ({ running, setTotalTime }: StopwatchProps) => {
  const [time, setTime] = useState(500);

  useEffect(() => {
    let interval: ReturnType<typeof setInterval> | undefined;
    if (running) {
      interval = setInterval(() => {
        setTime((prevTime) => prevTime + 1000);
      }, 1000);
    } else if (!running) {
      setTotalTime(
        `${("0" + Math.floor((time / 60000) % 60)).slice(-2)}:${(
          "0" + Math.floor((time / 1000) % 60)
        ).slice(-2)}`
      );
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [running]);
  return (
    <div>
      <span>{("0" + Math.floor((time / 60000) % 60)).slice(-2)}:</span>
      <span>{("0" + Math.floor((time / 1000) % 60)).slice(-2)}</span>
    </div>
  );
};
