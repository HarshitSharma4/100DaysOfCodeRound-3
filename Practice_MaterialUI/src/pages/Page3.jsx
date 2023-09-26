import { ThemeProvider } from "@emotion/react";
import { Grid, createTheme } from "@mui/material";

import NavigationBar3 from "../components/NavigationBar3";
import LeftBar from "../components/LeftBar";
import RightBar from "../components/RightBar";
import Feed from "../components/Feed";
import Footer from "../components/Footer";
import Add from "../components/Add";
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
        <Grid container>
          <Grid item md={2} sm={2} xs={2}>
            <LeftBar />
          </Grid>
          <Grid item md={7} sm={7} xs={10}>
            <Feed />
          </Grid>
          <Grid item sm={3}>
            <RightBar />
          </Grid>
        </Grid>
        <Footer
          title="Footer"
          discription="Something here to give the footer a purpose!"
        />
        <Add />
      </ThemeProvider>
    </>
  );
};

export default Page3;
