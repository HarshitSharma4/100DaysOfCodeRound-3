import { useEffect, useState } from "react";
import { ThemeProvider } from "./Context/Theme";
import Navigation from "./Components/Navgation/Navigation";
import Home from "./Pages/Home";
import ChangeMode from "./Components/ChangeMode";
import ChangeColorTheme from "./Components/ChangeColorTheme";
import About from "./Pages/About";
function App() {
  const [themeMode, setThemeMode] = useState("dark");
  const [colorTheme, setColorTheme] = useState("text-green border-green");
  const toggleTheme = () => {
    if (themeMode === "dark") setThemeMode("light");
    else setThemeMode("dark");
  };
  const greenColorTheme = () => {
    setColorTheme("text-green border-green");
  };
  const yellowColorTheme = () => {
    setColorTheme("text-yellow border-yellow");
  };
  const blueColorTheme = () => {
    setColorTheme("text-blue border-blue");
  };

  useEffect(() => {
    document.querySelector("html").classList.remove("light", "dark");
    document.querySelector("html").classList.add(themeMode);
  }, [themeMode]);
  return (
    <ThemeProvider
      value={{
        themeMode,
        colorTheme,
        toggleTheme,
        greenColorTheme,
        blueColorTheme,
        yellowColorTheme,
      }}
    >
      <div className="bg-bgTheme dark:bg-darkBgTheme text-textLignt flex gap-0">
        <Navigation />
        <ChangeMode />
        <ChangeColorTheme />
        <div className="flex-grow">
          <Home />
          <About />
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;
