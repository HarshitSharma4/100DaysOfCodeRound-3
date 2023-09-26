import {
  Button,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from "@mui/material";
import { featuredPosts } from "../Data/Data";

const Feed = () => {
  return (
    <Grid container spacing={4} style={{ padding: "2rem 1rem" }}>
      {featuredPosts.map((value, key) => (
        <Grid item key={key}>
          <CardActionArea>
            <Card style={{ padding: "1rem" }}>
              <CardMedia
                image={value.image}
                title={value.imageTitle}
                style={{ padding: "9rem" }}
              />
              <CardContent>
                <Typography variant="h4" component="h3">
                  {value.title}
                </Typography>
                <Typography variant="h5" component="h5">
                  {value.description}
                </Typography>
              </CardContent>
              <CardActionArea>
                <Button variant="contained" color="primary">
                  read more...
                </Button>
              </CardActionArea>
            </Card>
          </CardActionArea>
        </Grid>
      ))}
    </Grid>
  );
};

export default Feed;
