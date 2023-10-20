import { BsSun, BsFillMoonStarsFill } from "react-icons/bs";
import { useTheme } from "../Context/Theme";
import { twMerge } from "tailwind-merge";
const ChangeMode = () => {
  const theme = useTheme();
  const handelClick = () => {
    theme.toggleTheme();
  };
  return (
    <div
      className={twMerge(
        "text-lg md:text-xl fixed cursor-pointer top-7 right-7 px-4 py-2 border-2 border-solid rounded-xl",
        theme.colorTheme
      )}
      onClick={handelClick}
    >
      {/* {theme.themeMode === "light" ? <BsFillMoonFill /> : <BsSun />} */}
      {theme.themeMode === "light" ? <BsFillMoonStarsFill /> : <BsSun />}
    </div>
  );
};

export default ChangeMode;
