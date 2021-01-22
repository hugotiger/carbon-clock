import * as React from "react";
import { Header, Container, AboutSection } from "./components";
import { Clock } from "./views";
import GlobalStyle from "./GlobalStyle";

// TODO: Find the logo I made

function App() {
  return (
    <>
      <GlobalStyle />
      <Header />
      <Clock />
      <Container as="section" id="faq">
        <AboutSection />
      </Container>
    </>
  );
}

export default App;
