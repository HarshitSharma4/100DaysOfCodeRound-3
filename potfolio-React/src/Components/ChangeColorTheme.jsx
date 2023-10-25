import { GiOverInfinity } from "react-icons/gi";
import { twJoin, twMerge } from "tailwind-merge";
import { useTheme } from "../Context/Theme";
import { useState } from "react";
import { FaCross } from "react-icons/fa6";

const DailogBox = ({ setDailog }) => {
  const theme = useTheme();
  const themeColors = [
    {
      name: "Green",
      color: "bg-green",
      border: "border-green",
      setColor: theme.greenColorTheme,
    },
    {
      name: "Blue",
      color: "bg-blue",
      border: "border-blue",
      setColor: theme.blueColorTheme,
    },
    {
      name: "Yellow",
      color: "bg-yellow",
      border: "border-yellow",
      setColor: theme.yellowColorTheme,
    },
  ];
  return (
    <div className="fixed p-11 px-4 text-xl top-[50%] -translate-y-[50%] left-[50%] -translate-x-[50%] flex gap-4 bg-slate-500 flex-wrap justify-center items-center rounded-lg shadow-[5px_5px_rgba(0,_98,_90,_0.4),_10px_10px_rgba(0,_98,_90,_0.3),_15px_15px_rgba(0,_98,_90,_0.2),_20px_20px_rgba(0,_98,_90,_0.1),_25px_25px_rgba(0,_98,_90,_0.05)]">
      <h1 className="w-[100%] text-center text-2xl">
        Choose Your <span className={twMerge(theme.colorTheme)}>Theme</span> !
      </h1>

      {themeColors.map((value, key) => {
        return (
          <div
            key={key}
            className={twMerge(
              "border-solid border-2 px-4 py-2 rounded-lg flex items-center justify-center gap-4 flex-wrap cursor-pointer",
              value.border
            )}
            onClick={value.setColor}
          >
            <div
              className={twMerge("h-4 w-4 rounded-[100%]", value.color)}
            ></div>
            <h3>{value.name}</h3>
          </div>
        );
      })}
      <div
        onClick={() => {
          setDailog(false);
        }}
        className="text-3xl absolute top-0 right-4 cursor-pointer"
      >
        x
      </div>
    </div>
  );
};
function ChangeColorTheme() {
  const theme = useTheme();
  const [dailog, setDailog] = useState(false);

  return (
    <div>
      <div
        className={twJoin(
          "fixed bottom-7 right-7 cursor-pointer  rounded-[100%] p-3 text-xl md:text-2xl border-solid border-2",
          theme.colorTheme.text,
          theme.colorTheme.border,
          theme.colorTheme.btn
        )}
        onClick={() => {
          setDailog(!dailog);
        }}
      >
        <GiOverInfinity />
      </div>
      {dailog && <DailogBox setDailog={setDailog} />}
    </div>
  );
}

export default ChangeColorTheme;
