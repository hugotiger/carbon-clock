import styled from "styled-components";

export const Main = styled.main`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-feature-settings: "tnum";
  line-height: 1;

  background-image: url("https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-1.2.1&auto=format&fit=crop&w=3304&q=80");
  background-size: cover;
  background-position: center center;

  animation: fadein 2s;

  @keyframes fadein {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  &::after {
    content: "";
    position: absolute;
    width: 100%;
    min-height: 100%;
    background: linear-gradient(transparent 80%, black),
      radial-gradient(rgba(0, 0, 0, 0) 25%, black);
    pointer-events: none;
    z-index: 1;
  }
`;
