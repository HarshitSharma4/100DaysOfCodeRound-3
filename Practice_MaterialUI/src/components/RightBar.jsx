import {
  Avatar,
  AvatarGroup,
  Grid,
  ImageList,
  ImageListItem,
  Link,
  Typography,
} from "@mui/material";

const RightBar = () => {
  const itemData = [1, 2, 3, 4];
  return (
    <div style={{ padding: "2rem 1rem", position: "fixed" }}>
      <Typography variant="h5" component="h4" gutterBottom>
        Online Friends
      </Typography>
      <AvatarGroup max={4} style={{ position: "relative", left: "-120px" }}>
        <Avatar
          alt="Remy Sharp"
          src="https://material-ui.com/static/images/avatar/1.jpg"
        />
        <Avatar
          alt="Travis Howard"
          src="https://material-ui.com/static/images/avatar/2.jpg"
        />
        <Avatar
          alt="Cindy Baker"
          src="https://material-ui.com/static/images/avatar/3.jpg"
        />
        <Avatar
          alt="Agnes Walker"
          src="https://material-ui.com/static/images/avatar/4.jpg"
        />
        <Avatar
          alt="Trevor Henderson"
          src="https://material-ui.com/static/images/avatar/5.jpg"
        />
      </AvatarGroup>
      <Typography
        variant="h5"
        component="h4"
        gutterBottom
        style={{ margin: "2rem 0" }}
      >
        Gallary
      </Typography>
      <ImageList sx={{ width: 280, height: 400 }} cols={2} rowHeight={100}>
        {itemData.map((item, index) => (
          <ImageListItem key={index}>
            <img
              srcSet={`https://source.unsplash.com/random`}
              src={`https://source.unsplash.com/random`}
              alt={"fgfgfg"}
              loading="lazy"
            />
          </ImageListItem>
        ))}
      </ImageList>
      <Link component="a" style={{ margin: "1rem 0" }}>
        Sports
      </Link>
      <Link component="a" style={{ margin: "1rem" }}>
        Music
      </Link>
      <Link component="a" style={{ margin: "1rem" }}>
        Food
      </Link>
      <Link component="a" style={{ margin: "1rem" }}>
        Science
      </Link>
    </div>
  );
};

export default RightBar;
