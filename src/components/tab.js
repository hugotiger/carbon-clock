import styled from "styled-components";

export const Tab = styled.a`
  font-size: 18px;
  padding: calc(18px * 0.75) calc(18px * 1);
  border-radius: 4px;
  border: 1px solid white;
  line-height: 1;
  text-transform: uppercase;

  background: ${(props) => (props.isActive ? "white" : "transparent")};
  color: ${(props) => (props.isActive ? "black" : "white")};

  cursor: pointer;
  &:first-child {
    /* margin-right: 16px; */
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
  }
  &:last-child {
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
  }
  &:hover  {
    background: ${(props) => !props.isActive && "rgba(200, 200, 255, 0.15)"};
  }
`;
