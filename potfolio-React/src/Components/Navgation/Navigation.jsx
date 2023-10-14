import { Navdata, NavLogo } from "./NavData";
const Navigation = () => {
  return (
    <div className="Navigation relative bg-baseTheme w-14 md:w-56 h-screen">
      <div className=" fixed flex flex-col w-14 md:w-56 h-screen p-1 md:p-4">
        <div className="logo md:absolute md:-translate-x-5">
          <img
            src={NavLogo.logo2}
            alt="Logo"
            className="object-cover h-full w-full"
          />
        </div>
        <div className="Navitems flex flex-col gap-4 items-center justify-center flex-grow">
          {Navdata.map((item, key) => {
            return (
              <a
                key={key}
                href={item.section}
                className="Navitem hover:bg-gray-500 flex gap-3 w-full md:px-4 py-2 text-3xl md:text-xl font-medium  items-center justify-center md:justify-start font-body rounded-2xl "
              >
                {item.icon}
                <div className="hidden md:block">{item.name}</div>
              </a>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Navigation;
