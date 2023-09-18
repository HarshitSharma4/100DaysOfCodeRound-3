import { Container, createTheme, ThemeProvider, Grid } from "@mui/material";
import HeaderBlog from "../components/HeaderBlog";
import FeaturePost from "../components/FeaturePost";
import { featuredPosts } from "../Data/Data";
import PostCard from "../components/PostCard";
import MainBar from "../components/MainBar";
import SideBar from "../components/SideBar";

const Page2 = () => {
  const darkTheme = createTheme({
    palette: {
      mode: "dark",
    },
  });
  return (
    <ThemeProvider theme={darkTheme}>
      <Container>
        <HeaderBlog />
        <FeaturePost />
        <br />
        <Grid container spacing={2}>
          {featuredPosts.map((value, key) => (
            <PostCard key={key} post={value} />
          ))}
        </Grid>
        <br />
        <br />
        <br />
        <Grid container spacing={5}>
          <Grid item sm={12} md={8}>
            <MainBar title="From the firehose" />
          </Grid>
          <Grid item sm={12} md={4}>
            <SideBar />
          </Grid>
        </Grid>
      </Container>
    </ThemeProvider>
  );
};

export default Page2;
