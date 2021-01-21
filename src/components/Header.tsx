import { motion } from "framer-motion";
import * as React from "react";
import styled from "styled-components";

const StyledHeader = styled(motion.header)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 120px;
  z-index: 100;
  position: absolute;
  top: 0;
  margin: 0 auto;
  color: rgba(255, 255, 255, 0.9);
  font-size: 1.125rem;
  font-weight: 700;
  letter-spacing: 5px;
  text-transform: uppercase;

  a {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 200px;
    transition: color 0.2s;

    /* Reset default anchor styles */
    color: inherit;
    text-decoration: inherit;

    &:hover {
      color: white;
    }
  }
`;

const Header: React.FC = () => (
  <StyledHeader
    initial={{ opacity: 0 }}
    animate={{ opacity: 1, transition: { duration: 2 } }}
  >
    <a href="/">
      <span>Carbon</span>
      <span>Clock</span>
    </a>
  </StyledHeader>
);

export default Header;
