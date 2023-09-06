import { useState } from "react";
import {
  Navigator,
  NavHorizontal,
  NavLink,
  NavLogo,
  Nlogo,
} from "./Navigation.style";
import { Link } from "react-router-dom";
import { AiOutlineHome, AiOutlineCompass } from "react-icons/ai";
import { BsAlarm } from "react-icons/bs";
import { TbGraph } from "react-icons/tb";

const Navigation = () => {
  const [Display, setDisplay] = useState(1);
  return (
    <Navigator>
      <NavHorizontal>
        <NavLogo>
          <Nlogo>H</Nlogo>
          <p>Hrs.Design </p>
        </NavLogo>
        <h4 style={{ margin: "1.5rem .9rem" }}>Manue</h4>
        <NavLink>
          <Link
            to="/"
            onClick={() => {
              setDisplay(1);
            }}
            style={Display === 1 ? { backgroundColor: "#ac1b1b" } : {}}
          >
            <AiOutlineHome
              style={{ backgroundColor: "transparent", marginRight: "0.7rem" }}
            />
            <p>Home</p>
          </Link>
          <Link
            to="/movie/popular"
            onClick={() => {
              setDisplay(2);
            }}
            style={Display === 2 ? { backgroundColor: "#ac1b1b" } : {}}
          >
            <AiOutlineCompass
              style={{ backgroundColor: "transparent", marginRight: "0.7rem" }}
            />
            <p>Browse</p>
          </Link>
          <Link
            to="/movie/top_rated"
            onClick={() => {
              setDisplay(3);
            }}
            style={Display === 3 ? { backgroundColor: "#ac1b1b" } : {}}
          >
            <TbGraph
              style={{ backgroundColor: "transparent", marginRight: "0.7rem" }}
            />
            <p>Trending</p>
          </Link>
          <Link
            to="/movie/upcoming"
            onClick={() => {
              setDisplay(4);
            }}
            style={Display === 4 ? { backgroundColor: "#ac1b1b" } : {}}
          >
            <BsAlarm
              style={{ backgroundColor: "transparent", marginRight: "0.7rem" }}
            />
            <p>Upcoming</p>
          </Link>
        </NavLink>
      </NavHorizontal>
    </Navigator>
  );
};

export default Navigation;
