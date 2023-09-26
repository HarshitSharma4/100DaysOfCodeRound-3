import {
  AccountCircleRounded,
  MailLock,
  Notifications,
  Search,
} from "@mui/icons-material";
import {
  AppBar,
  Badge,
  Box,
  IconButton,
  InputBase,
  Toolbar,
  Typography,
} from "@mui/material";
import "../index.css";
const NavigationBar3 = () => {
  return (
    <AppBar position="fixed">
      <Toolbar
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Typography variant="h4" component="h4">
          Lama <span className="hide">dev</span>
        </Typography>
        <Box
          style={{
            width: "40%",
            backgroundColor: "#989c9fcc",
            height: "37px",
            display: "flex",
            borderRadius: "10px",
            flexDirection: "row",
            alignItems: "center",
            gap: "1.5rem",
          }}
        >
          <Search style={{ marginLeft: "10px" }} />
          <InputBase placeholder="Search..." />
        </Box>
        <div>
          <IconButton>
            <Badge badgeContent={4} color="secondary">
              <MailLock />
            </Badge>
          </IconButton>
          <IconButton>
            <Badge badgeContent={7} color="secondary">
              <Notifications />
            </Badge>
          </IconButton>
          <IconButton>
            <AccountCircleRounded />
          </IconButton>
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default NavigationBar3;
