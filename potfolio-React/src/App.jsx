import { useEffect, useState } from "react";
import { ThemeProvider } from "./Context/Theme";
import Navigation from "./Components/Navgation/Navigation";
import Home from "./Pages/Home";

function App() {
  const [themeMode, setThemeMode] = useState("light");
  const [colorTheme, setColorTheme] = useState("text-green-50");
  const toggleTheme = () => {
    if (themeMode === "dark") setThemeMode("light");
    else setThemeMode("dark");
  };
  const provideColorTheme = (color) => {
    setColorTheme(color);
  };
  useEffect(() => {
    document.querySelector("html").classList.remove("light", "dark");
    document.querySelector("html").classList.add(themeMode);
  }, [themeMode]);
  return (
    <ThemeProvider
      value={{ themeMode, colorTheme, toggleTheme, provideColorTheme }}
    >
      <div className="bg-bgTheme dark:bg-gray-400 text-textLignt flex gap-0">
        <Navigation />
        <div className="flex-grow">
          <Home />
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;
