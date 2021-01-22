import * as React from "react";
import { Header, Container, AboutSection } from "./components";
import { Clock } from "./views";
import GlobalStyle from "./GlobalStyle";
import { Footer } from "./components/Footer";

// TODO: Find the logo I made

function App() {
  return (
    <>
      <GlobalStyle />
      <Header />
      <Clock />
      <Container>
        <AboutSection />
        <Footer />
      </Container>
    </>
  );
}

export default App;
