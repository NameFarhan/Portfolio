import { ThemeProvider } from "@emotion/react"
import Navbar from "./Components/Navbar"
import Hero from './Components/Hero'
import About from './Components/About'
import { theme } from "./Theme/BreakpointsTheme"

function App() {

  return (
    <>
    <ThemeProvider theme={theme}>
    <Navbar/>
    <Hero/>
    <About/>
    </ThemeProvider>
    </>
  )
}

export default App
