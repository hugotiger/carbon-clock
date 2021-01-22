import * as React from "react";
import styled from "styled-components";

const StyledFooter = styled.footer`
  height: 120px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  a {
    color: inherit;
    text-decoration: inherit;
    border-bottom: none;

    &:hover {
      text-decoration: underline;
      border-bottom: none;
    }
  }
`;

export const Footer: React.FC = () => {
  return (
    <StyledFooter>
      <span>© {new Date().getFullYear()} Hugo Holm</span>
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
