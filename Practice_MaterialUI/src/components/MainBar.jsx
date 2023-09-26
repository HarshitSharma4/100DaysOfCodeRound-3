import { Divider, Typography } from "@mui/material";
import { posts } from "../Data/Data";
import Markdown from "markdown-to-jsx";

const MainBar = ({ title }) => {
  return (
    <>
      <Typography variant="h5" gutterBottom>
        {title}
      </Typography>
      <Divider />
      {posts.map((value) => (
        <Markdown key={value?.body}>{value?.body}</Markdown>
      ))}
    </>
  );
};

export default MainBar;
