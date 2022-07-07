import React from "react";
import BasicTabs from "./Tabs";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const myTheme = createTheme({
  components: {
    MuiTab: {
      styleOverrides: {
        root: {
          color: "#241F1F",
          fontSize: 14,
          fontWeight: 600,
          minWidth: 173,
          "&.Mui-selected": {
            color: "#C0FA1A",
          },
        },
      },
    },
    MuiTabs: {
      styleOverrides: {
        indicator: {
          background: "#C0FA1A",
        },
      },
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={myTheme}>
      <BasicTabs />
    </ThemeProvider>
  );
}

export default App;
