import { useEffect, useState } from "react";
import { NavLogo } from "./Navgation/NavData";
function Loading() {
  const [isloading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const time = setInterval(() => {
      if (progress === 100) setLoading(false);
      else setProgress(progress + 25);
    }, 450);

    return () => clearInterval(time);
  }, [progress]);
  return (
    <div>
      {isloading && (
        <div className="fixed z-50 top-0 left-0 bg-baseTheme h-screen w-screen flex items-center justify-center gap-4 flex-col ">
          <img
            className="h-44 w-44 -translate-y-24"
            src={NavLogo.logo3}
            alt="design"
          />
          <div className="w-44 h-3 rounded-lg overflow-hidden border-2 border-solid border-amber-900 -translate-y-24">
            <div
              className="bg-cyan-700 h-3"
              style={{ width: `${progress}%` }}
            ></div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Loading;
