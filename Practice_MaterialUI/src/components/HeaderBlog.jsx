import { Badge, Divider, IconButton, Toolbar, Typography } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import NotificationsIcon from "@mui/icons-material/Notifications";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { useStyles_blog } from "../index";
import SideDrawer from "./SideDrawer";
const HeaderBlog = () => {
  const classes = useStyles_blog();
  return (
    <>
      <Toolbar className={classes?.NavBar}>
        <SideDrawer>
          <IconButton color="inherit" ClassNames={classes?.manue}>
            <MenuIcon />
          </IconButton>
        </SideDrawer>

        <Typography variant="h5" className={classes?.blog}>
          Blogging WebSide
        </Typography>
        <div className={classes?.icons}>
          <IconButton color="inherit">
            <Badge badgeContent={4} color="secondary">
              <NotificationsIcon />
            </Badge>
          </IconButton>
          <IconButton color="inherit">
            <AccountCircleIcon />
          </IconButton>
        </div>
      </Toolbar>
      <Divider />
      <Toolbar>
        <Typography variant="h5" className={classes?.tagLine}>
          Express Your Emotiom Thorugh Word
        </Typography>
      </Toolbar>
    </>
  );
};

export default HeaderBlog;
