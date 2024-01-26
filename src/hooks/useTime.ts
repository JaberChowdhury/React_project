import { useState, useEffect } from "react";

const useTime = () => {
  const [time, setTime] = useState({
    hour: new Date().getHours(),
    minute: new Date().getMinutes(),
    second: new Date().getSeconds(),
    millisecond: new Date().getMilliseconds(),
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setTime({
        hour: new Date().getHours(),
        minute: new Date().getMinutes(),
        second: new Date().getSeconds(),
        millisecond: new Date().getMilliseconds(),
      });
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return time;
};

export default useTime;
