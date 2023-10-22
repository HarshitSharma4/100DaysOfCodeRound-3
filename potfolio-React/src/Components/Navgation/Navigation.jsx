import { Link } from "react-scroll";
import { Navdata, NavLogo } from "./NavData";
const Navigation = () => {
  return (
    <div className="Navigation relative  w-14 md:w-56 h-screen">
      <div className=" fixed flex flex-col bg-baseTheme dark:bg-darkBaseTheme w-14 md:w-56 h-screen p-1 md:p-4">
        <div className="logo ">
          <img
            src={NavLogo.logo2}
            alt="Logo"
            className="object-cover h-full w-full"
          />
        </div>
        <div className="Navitems flex flex-col gap-4 items-center justify-center md:justify-normal md:py-8 flex-grow">
          {Navdata.map((item, key) => {
            return (
              <Link
                activeClass="bg-gray-500"
                to={item.section}
                spy={true}
                smooth={true}
                duration={500}
                // offset={0}
                key={key}
                className="Navitem hover:bg-gray-500 flex gap-3 w-full md:px-4 py-2 text-2xl md:text-xl font-medium  items-center justify-center md:justify-start font-body rounded-2xl "
              >
                {item.icon}
                <div className="hidden md:block">{item.name}</div>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Navigation;
