import { AnimatePresence } from "framer-motion";
import React, { useState } from "react";
import { useCountdown } from "../calc";
import BudgetRemaining from "../components/BudgetRemaining";
import { Main } from "../components/Layout";
import { Tab } from "../components/tab";
import TimeRemaining from "../components/TimeRemaining";

export default function Clock() {
  const { remainingTime, remainingBudget } = useCountdown();
  const [active, setActive] = useState("carbon");
  return (
    <Main as="main">
      <AnimatePresence exitBeforeEnter>
        {active === "time" ? (
          <TimeRemaining value={remainingTime} key="time" />
        ) : (
          <BudgetRemaining value={remainingBudget} key="budget" />
        )}
      </AnimatePresence>
      <div style={{ position: "fixed", bottom: 150, zIndex: 100 }}>
        <Tab isActive={active === "carbon"} onClick={() => setActive("carbon")}>
          CO<sub>2</sub> budget left
        </Tab>
        <Tab isActive={active === "time"} onClick={() => setActive("time")}>
          Remaining time
        </Tab>
      </div>
    </Main>
  );
}
