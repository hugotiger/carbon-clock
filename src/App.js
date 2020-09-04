import React, { useState } from "react";
import AnimatedNumber from "animated-number-react";
import { motion, AnimatePresence } from "framer-motion";
import "./App.css";
import { useCountdown } from "./calc";
import { Tab } from "./components/tab";

function App() {
  const { remainingBudget, remainingTime } = useCountdown();
  const [active, setActive] = useState("carbon");

  const formatValue = (value) =>
    Math.trunc(value)
      .toString()
      .replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1, ");

  return (
    <div className="App">
      <AnimatePresence>
        {active === "time" ? (
          <motion.div
            className="carbon"
            initial={{ scale: 0.99, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{
              delay: 1,
              duration: 1,
            }}
            // style={{ marginBottom: 128 }}
          >
            <span className="label">Time remaining</span>
            {/* {React.useMemo(
              () => ( */}
            <div className="grid">
              <span className="time__value">{remainingTime.years}</span>
              <span className="time__value">{remainingTime.months}</span>
              <span className="time__value">{remainingTime.days}</span>
              <span className="time__value">{remainingTime.hours}</span>
              <span className="time__value">{remainingTime.minutes}</span>
              <span className="time__value">{remainingTime.seconds}</span>
              <span className="time-label">Years</span>
              <span className="time-label">Months</span>
              <span className="time-label">Days</span>
              <span className="time-label">Hours</span>
              <span className="time-label">Minutes</span>
              <span className="time-label">Seconds</span>
            </div>
            {/* ), */}
            {/* [remainingTime]
            )} */}
          </motion.div>
        ) : (
          <motion.div
            className="carbon"
            initial={{ scale: 0.99, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{
              delay: 1,
              duration: 1.5,
              ease: "easeOut",
            }}
          >
            <span className="label">
              CO<sub>2</sub> budget left (tons)
            </span>
            {/* {React.useMemo(
              () => ( */}
            <div>
              <AnimatedNumber
                value={remainingBudget}
                formatValue={formatValue}
                duration={500}
              />
            </div>
            {/* ),
              [remainingBudget]
            )} */}
          </motion.div>
        )}
      </AnimatePresence>
      <div style={{ position: "fixed", bottom: 150, zIndex: 100 }}>
        <Tab isActive={active === "carbon"} onClick={() => setActive("carbon")}>
          CO<sub>2</sub> remaining
        </Tab>
        <Tab isActive={active === "time"} onClick={() => setActive("time")}>
          Time remaining
        </Tab>
      </div>
    </div>
  );
}

export default App;
