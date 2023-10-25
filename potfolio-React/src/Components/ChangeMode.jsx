import { BsSun, BsFillMoonStarsFill } from "react-icons/bs";
import { useTheme } from "../Context/Theme";
import { twMerge } from "tailwind-merge";
import { useEffect, useState } from "react";
import Loading from "./Loading";
const ChangeMode = () => {
  const theme = useTheme();
  const [loading, setLoading] = useState(false);
  const handelClick = () => {
    setLoading(true);
    theme.toggleTheme();
  };
  useEffect(() => {
    const intervel = setInterval(() => {
      setLoading(false);
    }, 1850);
    return () => clearInterval(intervel);
  });
  return (
    <>
      {loading && <Loading />}
      <div
        className={twMerge(
          "text-lg md:text-xl fixed cursor-pointer top-7 right-7 px-4 py-2 border-2 border-solid rounded-xl ",
          theme.colorTheme.text,
          theme.colorTheme.border,
          theme.colorTheme.btn
        )}
        onClick={handelClick}
      >
        {/* {theme.themeMode === "light" ? <BsFillMoonFill /> : <BsSun />} */}
        {theme.themeMode === "light" ? <BsFillMoonStarsFill /> : <BsSun />}
      </div>
    </>
  );
};

export default ChangeMode;
