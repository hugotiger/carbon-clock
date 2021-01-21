import { AnimatePresence } from "framer-motion";
import React, { useState } from "react";
import styled from "styled-components";
import { Main, BudgetRemaining, TimeRemaining, TabButton } from "../components";
import { useCountdown } from "../hooks";

// TODO: Add 2.0 scenario

const TabsContainer = styled.div`
  position: absolute;
  bottom: 25vh;
  z-index: 50;
`;

export default function Clock() {
  const { remainingTime, remainingBudget } = useCountdown(500);
  const [active, setActive] = useState("carbon");
  return (
    <Main
      role="main"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 2 }}
    >
      <AnimatePresence exitBeforeEnter initial={false}>
        {active === "time" ? (
          <TimeRemaining value={remainingTime} key="time" />
        ) : (
          <BudgetRemaining value={remainingBudget} key="budget" />
        )}
      </AnimatePresence>
      <TabsContainer>
        <TabButton
          role="button"
          tabIndex={0}
          isActive={active === "carbon"}
          onClick={() => setActive("carbon")}
        >
          CO<sub>2</sub> budget left
        </TabButton>
        <TabButton
          role="button"
          tabIndex={0}
          isActive={active === "time"}
          onClick={() => setActive("time")}
        >
          Time remaining
        </TabButton>
      </TabsContainer>
    </Main>
  );
}
