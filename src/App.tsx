import React from "react"
import { ThemeProvider } from "styled-components"
import { theme } from "./theme/theme"
import { Normalize } from "styled-normalize"
import { GlobalStyles } from "./styles/globalStyles"
import { DebtsDataPage } from "./pages/debtsDataPage/DebtsDataPage"
import { BaseLayout } from "./layout/BaseLayout"
import { DebtsProvider } from "./utils/debtsContext/DebtsProvider"

const App = () => {
  
  return (
    <ThemeProvider theme={theme}>
      <Normalize />
      <GlobalStyles />
      <BaseLayout>
        <DebtsProvider>
          <DebtsDataPage />
        </DebtsProvider>
      </BaseLayout>
    </ThemeProvider>
  )
}

export default App
