import { React, useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/logo.png";
import { VscSearch } from "react-icons/vsc";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { CgProfile } from "react-icons/cg";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
const Navigation = (props) => {
  console.log(props?.page);
  return (
    <div className="h-14 w-full md:bg-gray-400 flex justify-between items-center md:px-14 bg-slate-900">
      <div className="space-x-3 flex items-center">
        <Link to="/">
          <div className="">
            <img className="h-10 w-15" src={Logo} alt="" />
          </div>
        </Link>
        <Link to="/Microsoft365">Microsoft 365</Link>
        <Link to="/Teams">Teams</Link>
        <Link to="/Windows"> Windows</Link>
        <Link to="/Surface"> Surface</Link>
        <Link to="/Xbox"> Xbox</Link>
        <Link to="/Support"> Support</Link>
      </div>
      <div className="space-x-3 flex">
        <Link className="flex align-middle space-x-2">
          All Microsoft <MdOutlineKeyboardArrowDown className="text-2xl" />
        </Link>
        <Link className="flex align-middle space-x-2">
          Search <VscSearch className="text-xl " />
        </Link>
        <Link className="flex align-middle space-x-2">
          Cart <AiOutlineShoppingCart className="text-2xl" />{" "}
        </Link>
        <Link className="flex align-middle space-x-2">
          Sing In <CgProfile className="text-3xl" />{" "}
        </Link>
      </div>
    </div>
  );
};

export default Navigation;
