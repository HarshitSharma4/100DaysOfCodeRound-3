import { useEffect, useState } from "react";
import { ThemeProvider } from "./Contexts/ThemeProvider";
import ThemeBtn from "./Components/ThemeBtn";
import Card from "./Components/Card";

function App() {
  const [ThemeMode, setThemeMode] = useState("light");
  const darkTheme = () => {
    setThemeMode("dark");
  };
  const lightTheme = () => {
    setThemeMode("light");
  };
  useEffect(() => {
    document.querySelector("html").classList.remove("light", "dark");
    document.querySelector("html").classList.add(ThemeMode);
  }, [ThemeMode]);
  return (
    <ThemeProvider value={{ ThemeMode, darkTheme, lightTheme }}>
      <div className="flex flex-wrap min-h-screen items-center dark:bg-slate-700">
        <div className="w-full">
          <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
            <ThemeBtn />
          </div>

          <div className="w-full max-w-sm mx-auto">
            <Card />
          </div>
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;
