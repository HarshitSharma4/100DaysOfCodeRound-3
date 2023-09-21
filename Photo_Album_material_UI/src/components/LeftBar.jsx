import { IconButton, Link } from "@mui/material";
import { leftBar } from "../Data/Template";
import "../index.css";
const LeftBar = () => {
  return (
    <div className="leftBar">
      {leftBar.map((value, key) => (
        <Link
          key={key}
          component="a"
          herf={value?.url}
          style={{
            display: "flex",
            alignItems: "center",
            gap: "0.5rem",
            color: "#fff",
            textDecoration: "none",
            cursor: "pointer",
          }}
        >
          <IconButton>
            <value.icon style={{ color: "#fff" }} />
          </IconButton>
          <span className="hidetitle">{value?.title}</span>
          {/* {value?.icon} */}
        </Link>
      ))}
    </div>
  );
};

export default LeftBar;
