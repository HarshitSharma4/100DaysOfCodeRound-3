import { ThemeProvider } from "@emotion/react";
import { createTheme } from "@mui/material";

import NavigationBar3 from "../components/NavigationBar3";
const darkTheme = createTheme({
  palette: {
    primary: {
      light: "#1F75FE",
      main: "#1F75FE",
      dark: "#002884",
      contrastText: "#fff",
    },
    secondary: {
      light: "#ff7961",
      main: "#f44336",
      dark: "#ba000d",
      contrastText: "#000",
    },
  },
});
const Page3 = () => {
  return (
    <>
      <ThemeProvider theme={darkTheme}>
        <NavigationBar3 />
      </ThemeProvider>
    </>
  );
};

export default Page3;
