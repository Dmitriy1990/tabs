import React from "react";
import BasicTabs from "./Tabs";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const vars = {
  orange: "#C0FA1A",
  fontSize: 14,
  textColor: "#241F1F",
};

const myTheme = createTheme({
  components: {
    MuiTab: {
      styleOverrides: {
        root: {
          color: vars.textColor,
          fontSize: vars.fontSize,
          fontWeight: 600,
          maxWidth: 173,
          width: "100%",
          "&.Mui-selected": {
            color: vars.orange,
          },
        },
      },
    },
    MuiTabs: {
      styleOverrides: {
        indicator: {
          background: vars.orange,
          height: 2,
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
