import { useState } from "react";
import { Link } from "react-router-dom";
import { Logo, Product } from "../Components/Data";
import { VscSearch } from "react-icons/vsc";
import { BiArrowBack } from "react-icons/bi";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { CgProfile } from "react-icons/cg";
import { FaBars, FaXmark } from "react-icons/fa6";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
const Navigation = () => {
  const [openBar, setOpenBar] = useState(false);
  const [openSearch, setOpensearch] = useState(false);
  const [searchText, setSearchText] = useState("");
  const [showProduct, setShowProduct] = useState(false);
  const searchItem = () => {
    alert(searchText);
  };

  return (
    <div className="Navigation relative">
      <div className="h-14 px-3  w-full flex justify-between items-center lg:px-8 ">
        <div className="lg:hidden space-x-5">
          <button
            className="bar  bottom-6 text-2xl focus:border-2 focus:border-gray-600 focus:border-dotted"
            onClick={() => {
              setOpenBar(!openBar);
            }}
          >
            {openBar ? <FaXmark /> : <FaBars />}
          </button>
          {openSearch ? (
            <div className="absolute bg-gray-50 top-0 left-0 -translate-x-5 w-full h-14 flex justify-center align-middle">
              <button
                className="bottom-6 w-8 text-2xl focus:border-2 focus:border-gray-600 focus:border-dotted"
                onClick={() => {
                  setOpensearch(!openSearch);
                }}
              >
                <BiArrowBack className="text-2xl" />
              </button>
              <div className="border-2 h-10 border-blue-400 border-solid flex m-2 w-10/12">
                <button
                  className="search bottom-6 text-2xl border-none focus:border-2 focus:border-gray-600 focus:border-dotted"
                  onClick={() => {
                    searchItem();
                  }}
                >
                  <VscSearch className="taxt-2xl w-10" />
                </button>
                <input
                  placeholder="Search Microsoft.com"
                  onChange={(e) => {
                    setSearchText(e.target.value);
                  }}
                  className="border-none outline-none text-base basis-3/4"
                />
              </div>
            </div>
          ) : (
            <>
              <button
                className="search bottom-6 text-xl focus:border-2 focus:border-gray-600 focus:border-dotted"
                onClick={() => {
                  setOpensearch(!openSearch);
                }}
              >
                <VscSearch className="taxt-xl" />
              </button>
            </>
          )}
        </div>

        <div className="hidden lg:flex space-x-3  items-center">
          <Link to="/">
            <div className="hidden lg:block">
              <img
                className="h-9 -translate-y-[0.13rem] tr w-15"
                src={Logo.Img}
                alt=""
              />
            </div>
          </Link>
          <Link
            to="/Microsoft365"
            className="h-7 text  hover:border-b-2 hover:border-solid hover:border-black"
          >
            Microsoft 365
          </Link>
          <Link
            to="/Teams"
            className="h-7 hover:border-b-2 hover:border-solid hover:border-black"
          >
            Teams
          </Link>
          <Link
            to="/Windows"
            className="h-7 hover:border-b-2 hover:border-solid hover:border-black"
          >
            Windows
          </Link>
          <Link
            to="/Surface"
            className="h-7 hover:border-b-2 hover:border-solid hover:border-black"
          >
            Surface
          </Link>
          <Link
            to="/Xbox"
            className="h-7 hover:border-b-2 hover:border-solid hover:border-black"
          >
            Xbox
          </Link>
          <Link
            to="/Support"
            className="h-7 hover:border-b-2 hover:border-solid hover:border-black"
          >
            Support
          </Link>
        </div>
        <div className="lg:hidden">
          <Link to="/">
            <div className="">
              <img className="h-10 w-15" src={Logo.Img} alt="" />
            </div>
          </Link>
        </div>
        <div className=" space-x-3 flex relative">
          <div
            className="hidden lg:flex align-middle space-x-2"
            onClick={() => {
              setShowProduct(!showProduct);
            }}
          >
            <h1 className="hidden lg:block hover:border-b-2 hover:border-solid hover:border-black">
              All Microsoft
            </h1>
            <MdOutlineKeyboardArrowDown className="text-2xl" />
          </div>
          {showProduct && (
            <div className="absolute bottom-0">
              {Product.map((value, key) => {
                return (
                  <div key={key}>
                    <h1>{Product.title}</h1>
                    {value.subtitle.map((value, key) => {
                      return (
                        <a href={value.link} key={key}>
                          {value.text}
                        </a>
                      );
                    })}
                  </div>
                );
              })}
            </div>
          )}
          {openSearch ? (
            <div className="hidden absolute bg-gray-50 top-0 left-0 -translate-x-5 w-full h-14 md:flex justify-center align-middle">
              <div className="border-2 h-10 border-blue-400 border-solid flex m-2 w-10/12">
                <button
                  className="search bottom-6 text-2xl border-none focus:border-2 focus:border-gray-600 focus:border-dotted"
                  onClick={() => {
                    searchItem();
                  }}
                >
                  <VscSearch className="taxt-2xl w-10" />
                </button>
                <input
                  placeholder="Search Microsoft.com"
                  onChange={(e) => {
                    setSearchText(e.target.value);
                  }}
                  className="border-none outline-none text-base basis-3/4"
                />
              </div>
              <button
                className="bottom-2 px-4 h-10 m-2 text-xl border-solid border-black border-2"
                onClick={() => {
                  setOpensearch(!openSearch);
                }}
              >
                Cancel
              </button>
            </div>
          ) : (
            <div
              className="hidden lg:flex align-middle space-x-2   "
              onClick={() => {
                setOpensearch(!openSearch);
              }}
            >
              <h1 className="hidden lg:block hover:border-b-2 hover:border-solid hover:border-black">
                Search
              </h1>
              <button className="search bottom-6 text-xl focus:border-2 focus:border-gray-600 focus:border-dotted">
                <VscSearch className="taxt-xl" />
              </button>
            </div>
          )}

          <Link className="flex align-middle space-x-2" to="/Cart">
            <h1 className="hidden lg:block hover:border-b-2 hover:border-solid hover:border-black">
              Cart
            </h1>
            <AiOutlineShoppingCart className="text-2xl" />
          </Link>
          <Link className="flex align-middle space-x-2" to="/SignIn">
            <h1 className="hidden lg:block hover:border-b-2 hover:border-solid hover:border-black">
              Sing In
            </h1>
            <CgProfile className="text-3xl" />
          </Link>
        </div>
      </div>
      {!openBar ? (
        <></>
      ) : (
        <div className="w-screen">
          <Link
            to="/Microsoft365"
            className="text-2xl h-14 p-3 block border-solid 
            border-b-2 shadow-sm border-gray-400 text-start px-4 bg-gray-300 hover:border-dotted hover:border-2 box-border hover:scale-105"
          >
            Microsoft 365
          </Link>
          <Link
            to="/Teams"
            className="text-2xl h-14 p-3 block border-solid border-b-2 shadow-sm border-gray-400 text-start px-4 bg-gray-300 hover:border-dotted hover:border-2 box-border hover:scale-105"
          >
            Teams
          </Link>
          <Link
            to="/Windows"
            className="text-2xl h-14 p-3 block border-solid border-b-2 shadow-sm border-gray-400 text-start px-4 bg-gray-300 hover:border-dotted hover:border-2 box-border hover:scale-105"
          >
            Windows
          </Link>
          <Link
            to="/Surface"
            className="text-2xl h-14 p-3 block border-solid border-b-2 shadow-sm border-gray-400 text-start px-4 bg-gray-300 hover:border-dotted hover:border-2 box-border hover:scale-105"
          >
            Surface
          </Link>
          <Link
            to="/Xbox"
            className="text-2xl h-14 p-3 block border-solid border-b-2 shadow-sm border-gray-400 text-start px-4 bg-gray-300 hover:border-dotted hover:border-2 box-border hover:scale-105"
          >
            Xbox
          </Link>
          <Link
            to="/Support"
            className="text-2xl h-14 p-3 block border-solid border-b-2 shadow-sm border-gray-400 text-start px-4 bg-gray-300 hover:border-dotted hover:border-2 box-border hover:scale-105"
          >
            Support
          </Link>
        </div>
      )}
    </div>
  );
};

export default Navigation;
