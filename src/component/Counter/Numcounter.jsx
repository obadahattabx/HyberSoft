import { useEffect, useState } from "react";

// eslint-disable-next-line react/prop-types
const Numcounter = ({ targetNumber, duration, isScroledCounter }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isScroledCounter) return;

    let start = 0;
    const increment = targetNumber / (duration / 10); // Update every 10ms

    const timer = setInterval(() => {
      start += increment;
      if (start >= targetNumber) {
        setCount(targetNumber); // Ensure exact target value
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 10);

    return () => clearInterval(timer);
  }, [isScroledCounter, targetNumber, duration]);

  return (
    <div style={{ fontSize: "2rem", fontWeight: "bold", margin: "20px 0" }}>
      {count}
    </div>
  );
};

export default Numcounter;
