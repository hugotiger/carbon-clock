import * as React from "react";
import { motion } from "framer-motion";
import styled from "styled-components";

const StyledCountdown = styled(motion.div)`
  font-size: 4em;
  letter-spacing: 3px;
  font-weight: 700;
  position: relative;
  z-index: 50;
  text-shadow: 0px 10px 30px rgba(0, 0, 0, 0.8);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: white;

  .label {
    letter-spacing: 1px;
    font-weight: 500;
    margin-top: 0;
    margin-bottom: 16px;
    text-align: center;
    font-size: 1.2rem;
    text-transform: uppercase;
  }
`;

interface Props {
  label: React.ReactNode;
}

const Countdown: React.FC<Props> = (props) => {
  const { children, label } = props;
  const duration = 0.25;

  return (
    <StyledCountdown
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration } }}
      exit={{ opacity: 0 }}
      transition={{ duration }}
    >
      <h1 className="label">{label}</h1>
      {children}
    </StyledCountdown>
  );
};

export default Countdown;
