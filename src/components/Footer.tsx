import * as React from "react";
import styled from "styled-components";

const StyledFooter = styled.footer`
  height: 120px;
  display: flex;
  align-items: center;
  justify-content: center;

  span {
    width: 140px;
    margin-left: 1rem;
    margin-right: 1rem;
  }

  a {
    color: inherit;
    text-decoration: inherit;

    &:hover {
      text-decoration: underline;
    }
  }
`;

export const Footer: React.FC = () => {
  return (
    <StyledFooter>
      <span>© {new Date().getFullYear()} Hugo Holm</span>|
      <span>
        <a
          href="https://hugotiger.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Get in touch
        </a>
      </span>
    </StyledFooter>
  );
};
