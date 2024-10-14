import { ThemeProvider } from "@emotion/react"
import Navbar from "./Components/Navbar"
import Hero from './Components/Hero'
import { theme } from "./Theme/BreakpointsTheme"

function App() {

  return (
    <>
    <ThemeProvider theme={theme}>
    <Navbar/>
    <Hero/>
    </ThemeProvider>
    </>
  )
}

export default App
