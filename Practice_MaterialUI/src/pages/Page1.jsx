import {
  Typography,
  Button,
  AppBar,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  CssBaseline,
  Grid,
  Toolbar,
  Container,
} from "@mui/material";
import { PhotoCamera } from "@mui/icons-material";
import { useStyles } from "../index";
const arrcard = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

const Page1 = () => {
  const classes = useStyles();
  return (
    <div className={classes.header}>
      <CssBaseline />
      <AppBar position="relative">
        <Toolbar>
          <PhotoCamera className={classes.photo} />
          <Typography variant="h6">Photo Album</Typography>
        </Toolbar>
      </AppBar>
      <main>
        <div>
          <Container maxWidth="sm" className={classes.mt}>
            <Typography variant="h2" align="center" color="textPrimary">
              Photo Ablum
            </Typography>
            <Typography variant="h6" align="center" color="textSecondary">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Asperiores ducimus a non voluptates magnam mollitia sed
              exercitationem dolorum recusandae perferendis.
            </Typography>
            <div>
              <Grid container spacing={2} className={classes.justify}>
                <Grid item>
                  <Button variant="contained" color="primary">
                    See Photos
                  </Button>
                </Grid>
                <Grid item>
                  <Button variant="outlined" color="primary">
                    Secondary Action
                  </Button>
                </Grid>
              </Grid>
            </div>
          </Container>
        </div>
        <div>
          <Container maxWidth="lg" className={classes.cardcontainer}>
            <Grid container spacing={4}>
              {arrcard.map((value, key) => (
                <Grid item key={key} xs={12} sm={6} md={4} lg={3}>
                  <Card>
                    <CardMedia
                      className={classes.media}
                      image="https://source.unsplash.com/random"
                      title="image title"
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h5">
                        Heading
                      </Typography>
                      <Typography gutterBottom variant="p">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Repellendus voluptas aliquid excepturi temporibus ut
                        illum architecto, nemo nulla perspiciatis odit!
                      </Typography>
                    </CardContent>
                    <CardActions>
                      <Button variant="contained" color="inherit">
                        view
                      </Button>
                      <Button variant="outlined" color="inherit">
                        Search
                      </Button>
                    </CardActions>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </Container>
        </div>
      </main>
      <footer>
        <Container maxWidth="sm" className={classes.mt} color="textPrimary">
          <Typography gutterBottom variant="h4" textAlign="center">
            Footer
          </Typography>
          <Typography variant="h6" textAlign="center" color="textSecondary">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minima
            totam exercitationem labore, blanditiis pariatur velit illo ratione
            facere ducimus aliquam!
          </Typography>
        </Container>
      </footer>
    </div>
  );
};

export default Page1;
