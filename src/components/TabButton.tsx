import styled from "styled-components";

interface Props {
  isActive: boolean;
}

// TODO: Improve accessibility with role="tablpanel" etc.
const Tab = styled.a<Props>`
  --text-size: 1rem;
  font-size: var(--text-size);
  padding: calc(var(--text-size) * 0.5) var(--text-size);
  border-radius: 4px;
  border: 1px solid rgba(255, 255, 255, 0.5);
  line-height: 1;
  font-weight: 500;
  text-transform: uppercase;

  background: ${(props) => (props.isActive ? "white" : "transparent")};
  color: ${(props) => (props.isActive ? "black" : "white")};

  outline: none;
  user-select: none;
  cursor: pointer;
  &:first-child {
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
  }
  &:last-child {
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
  }
  &:focus-visible {
    outline-style: auto;
    outline-color: blue;
    outline-width: 8px;
  }
  &:hover  {
    background: ${(props) => !props.isActive && "rgba(220, 220, 255, 0.15)"};
  }
`;

export default Tab;
