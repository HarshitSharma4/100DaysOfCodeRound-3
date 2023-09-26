import {
  Button,
  Card,
  CardActions,
  CardContent,
  Typography,
} from "@mui/material";
import { featurePost } from "../index";
const FeaturePost = () => {
  const classes = featurePost();
  return (
    <Card className={classes?.cover}>
      <CardContent>
        <Typography variant="h3" gutterBottom>
          Title of a longer featured blog post
        </Typography>
        <Typography variant="h5">
          Multiple lines of text that form the lede, informing new readers
          quickly and efficiently about what's most interesting in this post's
          contents.
        </Typography>
      </CardContent>
      <CardActions>
        <Button disableRipple>Read More ...</Button>
      </CardActions>
    </Card>
  );
};

export default FeaturePost;
