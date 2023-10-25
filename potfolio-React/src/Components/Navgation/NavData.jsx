import { AiFillHome, AiFillPieChart } from "react-icons/ai";
import { FaToolbox } from "react-icons/fa6";
import { BsFillPersonVcardFill } from "react-icons/bs";
import { MdPermContactCalendar } from "react-icons/md";
import Logo1 from "../../assets/Logo1.png";
import Logo2 from "../../assets/Logo2.png";
import Logo3 from "../../assets/Logo3.png";
import profile1 from "../../assets/IMG_20220918_231735.jpg";
import profile2 from "../../assets/IMG_20230223_215839.jpg";
import profile3 from "../../assets/IMG_20230304_211036.jpg";
import profile4 from "../../assets/SAVE_20230304_210545.jpg";
export const NavLogo = {
  logo1: Logo1,
  logo2: Logo2,
  logo3: Logo3,
};
export const profileImage = {
  img1: profile1,
  img2: profile2,
  img3: profile3,
  img4: profile4,
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
