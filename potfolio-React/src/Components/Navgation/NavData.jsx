import {
  AiFillHome,
  AiFillSchedule,
  AiFillFund,
  AiFillProject,
  AiFillPieChart,
} from "react-icons/ai";
import { FaToolbox } from "react-icons/fa6";
import {
  BsFillPersonVcardFill,
  BsFillPersonLinesFill,
  BsCircleHalf,
} from "react-icons/bs";
import { MdPermContactCalendar } from "react-icons/md";
import Logo1 from "../../assets/Logo1.png";
import Logo2 from "../../assets/Logo2.png";

export const NavLogo = {
  logo1: Logo1,
  logo2: Logo2,
};

export const Navdata = [
  {
    icon: <AiFillHome />,
    name: "Home",
    section: "home",
  },
  {
    icon: <AiFillPieChart />,
    //icon2:AiFillFund
    name: "Skills",
    section: "skills",
  },
  {
    //icon: <AiFillProject />,
    //icon: <AiFillSchedule />,
    icon: <FaToolbox />,
    name: "Project",
    section: "project",
  },
  {
    icon: <BsFillPersonVcardFill />,
    //icon2:BsFillPersonLinesFill
    name: "About",
    section: "about",
  },
  {
    icon: <MdPermContactCalendar />,
    name: "Contact me",
    section: "contactme",
  },
];
