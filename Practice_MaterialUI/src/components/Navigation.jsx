import { Box, Tabs, Tab } from "@mui/material";
import { Link, useLocation } from "react-router-dom";

const Navigation = () => {
  const location = useLocation();

  // Define your tabs and their corresponding routes
  const tabs = [
    { label: "Template 1", path: "/" },
    { label: "Template 2", path: "/template2" },
    { label: "Template 3", path: "/template3" },
  ];
  const activeTabIndex = tabs.findIndex(
    (tab) => tab.path === location.pathname
  );

  return (
    <Box
      sx={{
        width: "100%",
        bgcolor: "gray",
      }}
    >
      <Tabs
        value={activeTabIndex !== -1 ? activeTabIndex : false}
        indicatorColor="primary"
        textColor="inherit"
        centered
      >
        {tabs.map((tab, index) => (
          <Tab
            key={index}
            label={tab.label}
            component={Link}
            to={tab.path}
            disableRipple
            style={{ fontSize: "1rem", fontWeight: "700" }}
          />
        ))}
      </Tabs>
    </Box>
  );
};

export default Navigation;
