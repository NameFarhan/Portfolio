import React from "react";
import { ThemeProvider } from "@emotion/react";
import Navbar from "../Components/Navbar";
import Hero from "../Components/Hero";
import About from "../Components/About";
import Portfolio from "../Components/Portfolio";
import Services from "../Components/Services";
import { theme } from "../Theme/BreakpointsTheme";
import Achievments from "../Components/Achievments";
import Contact from "../Components/Contact";

const Home = () => {
  return (
    <ThemeProvider theme={theme}>
      <Navbar />
      <Hero />
      <About />
      <Portfolio />
      <Services/>
      <Achievments/>
      <Contact/>
    </ThemeProvider>
  );
};

export default Home;
