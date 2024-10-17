import React from "react";
import { ThemeProvider } from "@emotion/react";
import Navbar from "../Components/Navbar";
import Hero from "../Components/Hero";
import About from "../Components/About";
import Portfolio from "../Components/Portfolio";
import { theme } from "../Theme/BreakpointsTheme";

const Home = () => {
  return (
    <ThemeProvider theme={theme}>
      <Navbar />
      <Hero />
      <About />
      <Portfolio />
    </ThemeProvider>
  );
};

export default Home;
