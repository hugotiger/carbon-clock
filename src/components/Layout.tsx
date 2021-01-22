import { motion } from "framer-motion";
import styled from "styled-components";

export const Main = styled(motion.main)`
  width: 100vw;
  height: 100vh;
  min-height: 400px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-feature-settings: "tnum";
  line-height: 1;

  background-image: url("https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-1.2.1&auto=format&fit=crop&w=3304&q=80");
  background-size: cover;
  background-position: center center;

  position: relative;

  &::after {
    content: "";
    position: absolute;
    width: 100%;
    min-height: 100%;
    background: linear-gradient(transparent 80%, var(--black)),
      radial-gradient(rgba(0, 0, 0, 0) 25%, var(--black));
    pointer-events: none;
    z-index: 0;
  }
`;

export const Container = styled.div`
  width: 100%;
  max-width: 640px;
  margin: 0 auto;
  padding: 0 1rem;
`;
