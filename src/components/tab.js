import styled from "styled-components";

// TODO: Border vara en button istället
// Wrap in <Tabs> with aria-label
//
// role="tab"
// aria-selected="true/false"

//
// <Tabs>
//  <TabList>
//    <Tab> This is the button </Tab>
//  </TabList>
//  <TabPanels>
//    <TabPanel> This is the content </TabPanel>
//  </TabPanels>
// </Tabs>
//

// ELLER KIKA BARA PÅ
// https://www.w3.org/TR/wai-aria-practices-1.1/examples/tabs/tabs-1/tabs.html
export const Tab = styled.a`
  font-size: 18px;
  padding: calc(18px * 0.5) calc(18px * 1);
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
    background: ${(props) => !props.isActive && "rgba(220, 220, 255, 0.15)"};
  }
`;
