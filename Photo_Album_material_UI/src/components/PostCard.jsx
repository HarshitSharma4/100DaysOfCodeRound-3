import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Grid,
  Hidden,
  Typography,
} from "@mui/material";
import { makeStyles } from "@mui/styles";
// Define styles using makeStyles
const useStyles = makeStyles(() => ({
  card: {
    display: "flex",
  },
  cardDetail: {
    flex: "1",
  },
  image: {
    width: "160px",
  },
  continueReading: {
    color: "skyblue",
  },
}));

const PostCard = ({ post }) => {
  const classes = useStyles();

  if (!post) {
    return null;
  }

  return (
    <Grid item xs={12} sm={6}>
      <CardActionArea component="a" herf="#" color="secondary">
        <Card className={classes.card}>
          <CardContent className={classes.cardDetail}>
            <Typography variant="h5" component="h2">
              {post.title}
            </Typography>
            <Typography variant="subtitle1" color="textSecondary">
              {post.date}
            </Typography>
            <Typography variant="subtitle1" paragraph>
              {post.description}
            </Typography>
            <Typography variant="subtitle1" className={classes.continueReading}>
              Continue reading ...
            </Typography>
          </CardContent>
          <Hidden xsDown>
            <CardMedia
              className={classes.image}
              image={post?.image}
              title={post.imageTitle}
            />
          </Hidden>
        </Card>
      </CardActionArea>
    </Grid>
  );
};

export default PostCard;
