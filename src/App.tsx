import * as React from "react";
import { Header, Container } from "./components";
import AboutSection from "./components/AboutSection";
import GlobalStyle from "./GlobalStyle";
import Clock from "./views/Clock";

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
