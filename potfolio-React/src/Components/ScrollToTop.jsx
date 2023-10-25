import { useState } from "react";
import { AiOutlineArrowUp } from "react-icons/ai";
import { twMerge } from "tailwind-merge";
import { useTheme } from "../Context/Theme";

const ScrollToTop = () => {
  const theme = useTheme();
  const [isVissable, setIsVissable] = useState(false);
  const haldelScroll = () => {
    if (window.scrollY > 480) {
      setIsVissable(true);
    } else {
      setIsVissable(false);
    }
  };
  const scrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  window.addEventListener("scroll", haldelScroll);
  return (
    <div>
      {isVissable && (
        <div
          className={twMerge(
            "fixed bottom-24 right-8 cursor-pointer rounded-[100%] p-3 text-xl md:text-2xl border-solid border-2",
            theme.colorTheme.text,
            theme.colorTheme.border,
            theme.colorTheme.btn
          )}
          onClick={() => {
            scrollTop();
          }}
        >
          <AiOutlineArrowUp />
        </div>
      )}
    </div>
  );
};

export default ScrollToTop;
