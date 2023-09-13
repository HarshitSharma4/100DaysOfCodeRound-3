import { useEffect, useState } from "react";
import { BiUpArrowAlt } from "react-icons/bi";
const GotoTop = () => {
  const [IsVissable, setIsVissable] = useState(false);
  const [btnbuttom, setbtnbuttom] = useState(false);
  const listenToScroll = () => {
    let heightToHidden = 400;
    let buttonfixed = 2100;
    const winScroll =
      document.body.scrollTop || document.documentElement.scrollTop;
    console.log(winScroll);
    if (heightToHidden < winScroll && winScroll < buttonfixed) {
      setIsVissable(true);
      setbtnbuttom(false);
    } else if (buttonfixed <= winScroll) {
      setIsVissable(true);
      setbtnbuttom(true);
    } else {
      setbtnbuttom(false);
      setIsVissable(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", listenToScroll);
    return () => window.removeEventListener("scroll", listenToScroll);
  }, []);
  const BackToTop = () => {
    window.scrollTo({ top: 0, left: 0, behavior: `smooth` });
  };
  return (
    <>
      {" "}
      {IsVissable && (
        <button
          className="fixed right-4 bottom-4 z-20 bg-gray-400 text-base font-bold  py-1 flex items-center w-36 justify-center hover:bg-gray-300 hover:shadow-md"
          onClick={BackToTop}
          style={btnbuttom ? { bottom: "26.5rem" } : {}}
        >
          <BiUpArrowAlt className="text-gray-600 text-xl" /> Back to top
        </button>
      )}
    </>
  );
};

export default GotoTop;
