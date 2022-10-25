import React from "react";
import Index from "./pages/Index";
import { createTheme } from "@mui/material";
import { ThemeProvider } from "@mui/material";

const theme = createTheme({
  palette: {
    type: "light",
    primary: {
      main: "#00ABB3",
    },
    secondary: {
      main: "#3C4048",
    },
  },
});

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <Index />
      </ThemeProvider>
    </div>
  );
}

export default App;
