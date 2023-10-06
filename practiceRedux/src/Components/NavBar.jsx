import { RiAccountCircleFill } from "react-icons/ri";
import { BiLogIn, BiLogOut } from "react-icons/bi";

import { MdOutlineManageAccounts, MdShoppingCart } from "react-icons/md";
import { useState } from "react";
import { logout, selectUser } from "../Redux/Reducers/userSlice";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
const NavBar = () => {
  const [open, setOpen] = useState(false);
  const user = useSelector(selectUser);
  const dispatch = useDispatch();
  return (
    <div className="flex justify-between items-center relative border-b-4 border-gray-400  my-6">
      <h1 className="w-full px-9 text-4xl font-extrabold text-zinc-900 ">
        Fake Shop
      </h1>
      <div className="flex">
        <Link to="/AddToCard" className="mr-12">
          <MdShoppingCart className="text-5xl text-blue-950" />
        </Link>
        <div
          className="mr-12"
          onClick={() => {
            setOpen(!open);
          }}
        >
          <RiAccountCircleFill className="text-5xl text-blue-950" />
        </div>
      </div>

      {open && (
        <div className="absolute z-40 bg-gray-400 shadow-lg shadow-slate-900 right-14 top-14 p-7 rounded-md text-2xl text-zinc-800">
          <Link
            to="/Profile"
            className="flex gap-4 items-center hover:bg-gray-600 hover:text-black"
          >
            <MdOutlineManageAccounts />
            <h1>Profile</h1>
          </Link>
          {user === null || user === undefined ? (
            <Link
              to="/logIn"
              className="flex gap-4 items-center hover:bg-gray-600 hover:text-black"
            >
              <BiLogIn />
              <h1>Log In</h1>
            </Link>
          ) : (
            <div
              className="flex gap-4 items-center cursor-pointer hover:bg-gray-600 hover:text-black"
              onClick={() => {
                dispatch(logout());
              }}
            >
              <BiLogOut />
              <h1>LogOut</h1>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default NavBar;
