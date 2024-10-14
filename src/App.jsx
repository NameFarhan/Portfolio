import { ThemeProvider } from "@emotion/react"
import Navbar from "./Components/Navbar"
import { theme } from "./Theme/BreakpointsTheme"

function App() {

  return (
    <>
    <ThemeProvider theme={theme}>
    <Navbar/>
    </ThemeProvider>
    </>
  )
}

export default App
