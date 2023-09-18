//import { makeStyles } from "@mui/material";

import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles(() => ({
  header: {
    background: "#c2f2f6",
    margin: `0`,
  },
  photo: {
    marginRight: "2rem",
  },
  mt: {
    margin: `4rem auto`,
  },
  justify: {
    justifyContent: "center",
  },
  media: {
    paddingTop: "63.7%",
  },
}));

export const useStyles_blog = makeStyles(() => ({
  NavBar: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  icons: { fontSize: "2rem" },
  manue: { fontSize: "2rem" },
  blog: {},
  tagLine: {
    textTransform: "uppercase",
    justifyContent: "center",
    fontFamily: "Montserrat",
  },
}));

export const featurePost = makeStyles(() => ({
  cover: {
    padding: "2.5rem",
    background: `url(../src/assets/pexels-muffin-creatives-2468773.jpg)  !important`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundColor: "#52535462 !important",
  },
}));
